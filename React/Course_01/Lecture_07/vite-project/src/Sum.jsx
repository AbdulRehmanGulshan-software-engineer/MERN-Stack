import React from "react";

const Sum = React.memo(({ number }) => {
  function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  const total = calculateSum();

  console.log("Sum Render");
  //returned JSX
  return (
    <>
      <h1>This is our math library.</h1>
      <h2>Sum is {total}</h2>
    </>
  );
});

// //regular method 👇
// function Sum() {
//   function calculateSum() {
//     let sum = 0;
//     for (let i = 1; i <= 1000; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   const total = calculateSum();

//   console.log("Sum Render");
//   //returned JSX
//   return (
//     <>
//       <h1>This is our math library.</h1>
//       <h2>Sum is {total}</h2>
//     </>
//   );
// }

export default Sum;
