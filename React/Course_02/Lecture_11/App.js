import React from 'react';
import AppleCounter from './components/AppleCounter';

// Parcel 2 way to reference an image
const RightArrow = new URL('./assets/images/right-arrow.png', import.meta.url);
// console.log(import.meta.url);
console.log(new URL('./assets/images/right-arrow.png', import.meta.url));
export default function App() {
  return (
    <div>
      <AppleCounter></AppleCounter>
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
