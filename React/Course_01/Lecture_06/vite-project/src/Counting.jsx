import { useState } from "react";

function Counting({ name }) {
  const [count, setCount] = useState(0);
  return (
    <>
    <div>
      <h1>Our First Counter app: {name}</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </>
  );
}
export default Counting;