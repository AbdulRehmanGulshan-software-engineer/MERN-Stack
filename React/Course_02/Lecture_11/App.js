import React from 'react';
import AppleCounter from './components/AppleCounter';

// Parcel 2 way to reference an image
const RightArrow = new URL('./assets/images/right-arrow.png', import.meta.url);
// console.log(import.meta.url);
console.log(new URL('./assets/images/right-arrow.png', import.meta.url));
export default function App() {
  return (
    <div>
      <h1 onClick={(e) => { console.log(e) }}>Hello</h1>
      <AppleCounter onClick={(e) => {   //here we cannot apply event on component,will be pass as props
        console.log(e);
      }} />
    </div>
  );
}

// //using arrow function 👇
// const App = () => {
//     return (
//         <div>App</div>
//     )
// }
// export default App;
