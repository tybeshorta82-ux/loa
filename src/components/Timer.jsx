import { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <h2>⏱ {time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;