import { useState } from "react";
import Product from "./Product";
import Counter from "./Counter";
import Display from "./Display";


function Body() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", price: 100 },
    { id: 2, name: "Almond", price: 200 },
    { id: 3, name: "Protein", price: 300 },
    { id: 4, name: "Sugar", price: 400 },
    { id: 5, name: "Salt", price: 500 },
  ]);
  // console.log("Body is render");

  return (
    <>
      <h1>I am the Blinkit Body</h1>
      {/* <Counter count={count} setcount={setcount} /> */}
      <div style={{display:"flex"}}>
        {
            items.map((item)=><Product key={item.id} item={item}></Product>)
        }
      </div>
    </>
  );
}

export default Body;
