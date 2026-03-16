import { useState } from "react";

function Counter() {
  const [count, setCount] = useState([10,20,30]);

  function handleChange() {
    //react will compare array on the basis of reference
    setCount([...count,40])
  }
  console.log("App");
  return (
    <>
      <h1>Counter : {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={handleChange}>Increment</button>
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </>
  );
}

export default Counter;
