import { useRef, useState } from "react";

//stopwatch : start,stop,reset

function App() {
  const [time, setTime] = useState(0);
  let intervalIDRef = useRef(null);

  function handleStart() {
    if (intervalIDRef.current != null) {
      // clearInterval(intervalIDRef.current);
      //best way 👇
      return;
    }
    intervalIDRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalIDRef.current);
  }

  function handleReset() {
    clearInterval(intervalIDRef.current);
    intervalIDRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>Stopwatch : {time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
