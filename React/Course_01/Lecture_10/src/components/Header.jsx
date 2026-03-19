import { createContext, useState } from "react";
import Display from "./Display";

export const CounterContent = createContext();
function Header() {
  const [cartItems, setCartItems] = useState(0);

  console.log("Header is render");

  return (
    <>
      <CounterContent.Provider value={{ cartItems, setCartItems }}>
        <h1>I am Blinkit</h1>
        <h2>Items in cart : {cartItems}</h2>
        <Display />
      </CounterContent.Provider>
    </>
  );
}

export default Header;
