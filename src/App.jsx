import Timer from './components/Timer';
import ZoomImage from './components/ZoomImage';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#61dafb' }}>useRef დავალებები</h1>
      
      <Timer />
      <hr />
      <ZoomImage />
      <hr />
      <VideoPlayer />
    </div>
  );
}

export default App;