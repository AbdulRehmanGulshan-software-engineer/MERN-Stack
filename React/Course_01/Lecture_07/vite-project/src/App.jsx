import { useCallback, useMemo, useState } from "react";
import Sum from "./Sum";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000);

  function calculatePrime() {
    console.log("I am called");
    let total = 0;
    for (let i = 2; i <= number; i++) {
      total++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }
    return total;
  }

  // useCallBack hook 👇
  // this function is not dependent
  const handleClick = useCallback(() => {
    console.log("Hello Big Gamez PUCIT.", count);
  }, [count]);

  const obj = useMemo(() => {
    return { name: "Abdul", age: 19 };
  }, []);

  //useMemo hook 👇
  // const prime = calculatePrime();
  const prime = useMemo(() => calculatePrime(), [number]);

  console.log("app render");

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>your current number : {number}</h2>
      <button onClick={() => setNumber(number + 100000)}>
        Increment Number
      </button>
      <h3>Total Prime Number : {prime}</h3>
      <button onClick={handleClick}>Click</button>
      {/* <Sum number={1000}></Sum> */}
      <Sum number={number}></Sum>
      {/* <Post value={{ name: "Abdul", age: 19 }}></Post> */}
      <Post value={obj}></Post>
    </>
  );
}

export default App;
