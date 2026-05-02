import { useState, useRef } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #444', margin: '10px', borderRadius: '10px' }}>
      <h3>თაიმერი: {seconds} წამი</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ margin: '0 10px' }}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;