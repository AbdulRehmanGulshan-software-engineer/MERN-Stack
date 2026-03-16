import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter");
  return (
    <>
      <h1>Counter Application: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
