import Timer from "./components/Timer";
import ZoomImage from "./components/ZoomImage";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>useRef დავალება</h1>

      <div style={{ marginBottom: "40px" }}>
        <Timer />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <ZoomImage />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;