import React, { useState, useEffect, ReactElement, Suspense } from "react";
import { Props } from "./interfaces";
import useAudioRecorder from "../hooks/useAudioRecorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPause, faPlay, faStop, faTrash, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../styles/audio-recorder.css";
const LiveAudioVisualizer = React.lazy(async () => {
  const { LiveAudioVisualizer } = await import("react-audio-visualize");
  return { default: LiveAudioVisualizer };
});
const AudioRecorder = ({
  onSubmit,
  recorderControls,
  audioTrackConstraints,
  showVisualizer = false,
  iconColors,
  classes,
}: Props) => {
  const [shouldDiscard, setShouldDiscard] = useState(false);

  const { startRecording, stopRecording, togglePauseResume, recordingBlob, isRecording, isPaused, recordingTime, mediaRecorder } = recorderControls ?? useAudioRecorder(audioTrackConstraints);

  const handleDiscard = () => {
    setShouldDiscard(true);
    stopRecording();
  };

  const handleStopAndSubmit = async () => {
    if(isRecording) {
      await stopRecording();
    }
    if(recordingBlob && onSubmit) {
      onSubmit(recordingBlob);
    }
  };

  useEffect(() => {
    if (!isRecording) {
      setShouldDiscard(false);
    }
  }, [isRecording]);


  return (
    <div className={`audio-recorder ${isRecording ? "recording" : ""} ${classes?.AudioRecorderClass ?? ""}`}>
      {!isRecording && (
        <FontAwesomeIcon
          icon={faMicrophone}
          onClick={startRecording}
          color={iconColors?.start}
          size="2x"
          className="cursor-pointer"
        />
      )}
      <div className="audio-recorder-controls">
        {isRecording && (
          <FontAwesomeIcon
            icon={isPaused ? faPlay : faPause}
            onClick={togglePauseResume}
            color={isPaused ? iconColors?.resume : iconColors?.pause}
            size="2x"
            className="cursor-pointer"
          />
        )}
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
        {isRecording && (
          <FontAwesomeIcon
            icon={faPaperPlane}
            onClick={handleStopAndSubmit}
            color={iconColors?.save}
            size="2x"
            className="cursor-pointer audio-recorder-submit"
          />
        )}
      </div>
      <span className={`audio-recorder-timer ${!isRecording ? "display-none" : ""}`}>
        {Math.floor(recordingTime / 60)}:{String(recordingTime % 60).padStart(2, "0")}
      </span>
    </div>
  );
};
export default AudioRecorder;
