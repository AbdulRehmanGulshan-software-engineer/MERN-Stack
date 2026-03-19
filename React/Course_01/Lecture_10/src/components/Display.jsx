import { useContext } from "react";
import { CounterContext } from "../App";

//values: {count,setCount}

function Display() {
  const value = useContext(CounterContext);

  console.log("Display is render");

  return (
    <>
      <h1>I am displaying Count: {value.count}</h1>
    </>
  );
}

export default Display;
