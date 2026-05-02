import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef();

  const play = () => {
    videoRef.current.play();
  };

  const pause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div>
        <button onClick={play}>Start</button>
        <button onClick={pause}>Stop</button>
      </div>
    </div>
  );
}

export default VideoPlayer;