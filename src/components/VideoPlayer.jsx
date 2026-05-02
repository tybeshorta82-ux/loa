import { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #444', borderRadius: '10px' }}>
      <h3>ქასთომ ვიდეო ფლეიერი</h3>
      <video ref={videoRef} width="100%" style={{ borderRadius: '5px' }}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div style={{ marginTop: '10px' }}>
        <button onClick={playVideo}>Start</button>
        <button onClick={pauseVideo} style={{ marginLeft: '10px' }}>Stop</button>
      </div>
    </div>
  );
};

export default VideoPlayer;