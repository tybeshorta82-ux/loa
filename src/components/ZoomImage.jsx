import { useRef } from "react";

function ZoomImage() {
  const imgRef = useRef();

  const zoomIn = () => {
    imgRef.current.style.transform = "scale(1.5)";
  };

  const zoomOut = () => {
    imgRef.current.style.transform = "scale(1)";
  };

  return (
    <div>
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
        onMouseEnter={zoomIn}
        onMouseLeave={zoomOut}
        style={{ width: "300px", transition: "0.3s" }}
      />
    </div>
  );
}

export default ZoomImage;