import { useState } from "react";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  // function increaseNumber() {
  //   count++;
  //   const para = document.querySelector("p");
  //   para.textContent = `Counter: ${count}`;
  //   const button = document.querySelector("button");
  //   button.textContent = `Increment: ${count}`;
  //   console.log(count);
  // }

  function increaseNumber() {
    // count++;
    setCount(count+1);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increaseNumber}>Increment : {count}</button>
    </>
  );
}

export default App;
