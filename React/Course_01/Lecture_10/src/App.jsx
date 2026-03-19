import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  console.log("App is render");

  return (
    <>
      <CounterContext value={{ count, setCount }}>
        <Header/>
        <Body count={count} setcount={setCount} />
        <Footer />
      </CounterContext>
    </>
  );
}

export default App;
