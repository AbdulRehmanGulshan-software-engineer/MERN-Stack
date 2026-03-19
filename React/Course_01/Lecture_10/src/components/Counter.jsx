import { useContext, useState } from "react";
import { CounterContext } from "../App";

function Counter({count,setcount}) {

        console.log("Counter is render");
        
        // const {count,setCount} = useContext(CounterContext);

    return (
        <>
        <h1>Counter is : {count}</h1>
        <button onClick={()=>setcount(count=>count+1)}>Increment</button>
        <button onClick={()=>setcount(count=>count-1)}>Decrement</button>
        </>
    )
}

export default Counter;