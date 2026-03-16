import { useState } from "react";
import Food from "./Food";

function List() {
    const [foodItems,setFoodItems] = useState(["Apple","orange","Banana","PineApple"]);

    function handleChange() {
        setFoodItems(["Mango",...foodItems]);
    }

    return(
        <>
        <button onClick={handleChange}>Increment</button>
        <Food foods={foodItems}></Food>
        </>
    )
}

export default List;