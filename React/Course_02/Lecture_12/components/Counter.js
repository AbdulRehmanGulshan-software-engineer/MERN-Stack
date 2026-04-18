import { useState } from "react"

export default function Counter() {
  // const myStateArray = (useState(0));
  // const count = myStateArray[0];
  // const setCount = myStateArray[1];

  // By array destructuring
  const [count, setCount] = useState(0);
  console.log("rendering");
  return (
    <div style={{ textAlign: 'center' }}>
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase Count</button>
    </div >
  )
}
