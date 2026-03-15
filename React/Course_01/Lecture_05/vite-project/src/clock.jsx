import { useEffect, useState } from "react";

function Clock() {
  //created state variable
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(true);

  useEffect(() => {
    if(!show)
        return;
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hi");
    }, 1000);

    return () => {
        console.log("hello cleanup function called,react knows i am cleanup function.");
      clearInterval(intervalID);
    };
  }, [show]);

  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
      {show && <h1>Current Time: {time}</h1>}
    </>
  );
}

export default Clock;
