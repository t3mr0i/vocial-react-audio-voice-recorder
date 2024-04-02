import React, { useState, useEffect, ReactElement, Suspense } from "react";
import { Props } from "./interfaces";
import useAudioRecorder from "../hooks/useAudioRecorder";

import "../styles/audio-recorder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperPlane, faPause, faPlay, faSave, faStop, faTrash } from "@fortawesome/free-solid-svg-icons";

const LiveAudioVisualizer = React.lazy(async () => {
  const { LiveAudioVisualizer } = await import("react-audio-visualize");
  return { default: LiveAudioVisualizer };
});

/**
 * Usage: https://github.com/samhirtarif/react-audio-recorder#audiorecorder-component
 *
 *
 * @prop `onRecordingComplete` Method that gets called when save recording option is clicked
 * @prop `recorderControls` Externally initilize hook and pass the returned object to this param, this gives your control over the component from outside the component.
 * https://github.com/samhirtarif/react-audio-recorder#combine-the-useaudiorecorder-hook-and-the-audiorecorder-component
 * @prop `audioTrackConstraints`: Takes a {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings#instance_properties_of_audio_tracks subset} of `MediaTrackConstraints` that apply to the audio track
 * @prop `onNotAllowedOrFound`: A method that gets called when the getUserMedia promise is rejected. It receives the DOMException as its input.
 * @prop `downloadOnSavePress` If set to `true` the file gets downloaded when save recording is pressed. Defaults to `false`
 * @prop `downloadFileExtension` File extension for the audio filed that gets downloaded. Defaults to `mp3`. Allowed values are `mp3`, `wav` and `webm`
 * @prop `showVisualizer` Displays a waveform visualization for the audio when set to `true`. Defaults to `false`
 * @prop `classes` Is an object with attributes representing classes for different parts of the component
 * @prop `iconColors` Is an object with attributes for the colors of different parts of the component

 */
const AudioRecorder: (props: Props) => ReactElement = ({
  onRecordingComplete,
  onNotAllowedOrFound,
  recorderControls,
  audioTrackConstraints,
  downloadOnSavePress = false,
  downloadFileExtension = "webm",
  showVisualizer = false,
  iconColors = { start: "#000", stop: "#000", pause: "#000", resume: "#000", save: "#000", discard: "#000" },
  mediaRecorderOptions,
  classes,
}: Props) => {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = recorderControls ?? useAudioRecorder(audioTrackConstraints, onNotAllowedOrFound, mediaRecorderOptions);

  const [shouldSave, setShouldSave] = useState(false);
  const [shouldDiscard, setShouldDiscard] = useState(false);

  const stopAudioRecorder: (save?: boolean) => void = (
    save: boolean = true
  ) => {
    setShouldSave(save);
    stopRecording();
  };

  const convertToDownloadFileExtension = async (
    webmBlob: Blob
  ): Promise<Blob> => {
    const FFmpeg = await import("@ffmpeg/ffmpeg");
    const ffmpeg = FFmpeg.createFFmpeg({ log: false });
    await ffmpeg.load();

    const inputName = "input.webm";
    const outputName = `output.${downloadFileExtension}`;

    ffmpeg.FS(
      "writeFile",
      inputName,
      new Uint8Array(await webmBlob.arrayBuffer())
    );

    await ffmpeg.run("-i", inputName, outputName);

    const outputData = ffmpeg.FS("readFile", outputName);
    const outputBlob = new Blob([outputData.buffer], {
      type: `audio/${downloadFileExtension}`,
    });

    return outputBlob;
  };

  const downloadBlob = async (blob: Blob): Promise<void> => {
    if (!crossOriginIsolated && downloadFileExtension !== "webm") {
      console.warn(
        `This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"`
      );
    }

    const downloadBlob = crossOriginIsolated
      ? await convertToDownloadFileExtension(blob)
      : blob;
    const fileExt = crossOriginIsolated ? downloadFileExtension : "webm";
    const url = URL.createObjectURL(downloadBlob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `audio.${fileExt}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const handleDiscard = () => {
    setShouldDiscard(true);
    stopRecording();
  };

  useEffect(() => {
    if (!isRecording && recordingBlob && !shouldDiscard && onRecordingComplete) {
      onRecordingComplete(recordingBlob);
      if (downloadOnSavePress) {
        // Logic to handle downloading of the blob
      }
    }
    if (!isRecording) {
      setShouldDiscard(false); // Reset discard flag when not recording
    }
  }, [isRecording, recordingBlob, shouldDiscard, onRecordingComplete, downloadOnSavePress]);

  useEffect(() => {
    if (
      (shouldSave || recorderControls) &&
      recordingBlob != null &&
      onRecordingComplete != null
    ) {
      onRecordingComplete(recordingBlob);
      if (downloadOnSavePress) {
        void downloadBlob(recordingBlob);
      }
    }
  }, [recordingBlob]);

  return (
    <div className={`audio-recorder ${isRecording ? "recording" : ""} ${classes?.AudioRecorderClass ?? ""}`}>
      {!isRecording ? (
        <FontAwesomeIcon
          icon={faMicrophone}
          onClick={startRecording}
          color={iconColors.start}
          size="2x"
          className="cursor-pointer"
        />
      ) : (
        <>
          <FontAwesomeIcon
            icon={faStop}
            onClick={() => stopRecording()}
            color={iconColors.stop}
            size="2x"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={isPaused ? faPlay : faPause}
            onClick={togglePauseResume}
            color={isPaused ? iconColors.resume : iconColors.pause}
            size="2x"
            className="cursor-pointer"
          />
        <FontAwesomeIcon
        icon={faTrash}
        onClick={handleDiscard}
        color={iconColors.discard}
        size="2x"
        className="cursor-pointer"
      />
        </>
      )}
      {recordingBlob && !isRecording && (
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={() => {
            if (onRecordingComplete) onRecordingComplete(recordingBlob);
          }}
          color={iconColors.save}
          size="2x"
          className="cursor-pointer"
        />
      )}
      <span className={`audio-recorder-timer ${!isRecording ? "display-none" : ""}`}>
        {Math.floor(recordingTime / 60)}:{String(recordingTime % 60).padStart(2, "0")}
      </span>
      {showVisualizer && mediaRecorder && (
        <Suspense fallback={<div>Loading visualizer...</div>}>
          <LiveAudioVisualizer
            mediaRecorder={mediaRecorder}
            barWidth={2}
            gap={2}
            width={140}
            height={30}
            fftSize={512}
            maxDecibels={-10}
            minDecibels={-80}
            smoothingTimeConstant={0.4}
          />
        </Suspense>
      )}
    </div>
  );
};

export default AudioRecorder;

function setShouldDiscard(arg0: boolean) {
  throw new Error("Function not implemented.");
}
