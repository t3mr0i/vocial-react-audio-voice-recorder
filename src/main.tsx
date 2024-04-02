import React from "react";
import ReactDOM from "react-dom/client";
import AudioRecorder from "./components/AudioRecordingComponent";

const addAudioElement = (blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

// Define your custom colors for the icons
const customIconColors = {
  start: "#4caf50", // Green for start
  stop: "#f44336", // Red for stop
  pause: "#ffeb3b", // Yellow for pause
  resume: "#2196f3", // Blue for resume
  save: "#4caf50", // Green for save
  discard: "#9e9e9e", // Grey for discard
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AudioRecorder 
      onRecordingComplete={(blob) => addAudioElement(blob)} 
      showVisualizer={true}
      downloadOnSavePress
      downloadFileExtension="mp3"
      iconColors={customIconColors} // Pass your custom icon colors as a prop
    />
  </React.StrictMode>
);