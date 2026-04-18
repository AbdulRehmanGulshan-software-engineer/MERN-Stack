import React from 'react'
import Button from './Button';
import AppleBasket from './AppleBasket';
import './AppleCounter.css';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

// Import Image from "url:./assets/images/arrow-left.svg"    //other way to import and use image

const leftArrow = new URL('../assets/images/arrow.png', import.meta.url);
const rightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

export const AppleCounter = ({ onClick }) => {
    const leftClickHandler = () => {
        console.log("Left Arrow Click Event")
        if (rightAppleCount >= 1) {
            rightAppleCount--;
            leftAppleCount++;
        }
        console.log(leftAppleCount)
        console.log(rightAppleCount)

    }
    const rightClickHandler = () => {
        console.log("Right Arrow Click Event")
        if (leftAppleCount >= 1) {
            rightAppleCount++;
            leftAppleCount--;
        }
        console.log(leftAppleCount)
        console.log(rightAppleCount)
    }
    return (
        <>
            <div onClick={onClick} className='AppleCounter'>
                <AppleBasket appleCount={leftAppleCount} basketName={"Basket 1"} />
                <Button imageURL={leftArrow} buttonName="Left Arrow" onClick={leftClickHandler} />
                <Button imageURL={rightArrow} buttonName="Right Arrow" onClick={rightClickHandler} />
                <AppleBasket appleCount={rightAppleCount} basketName={"Basket 2"} />
            </div>
            <p style={{
                textAlign: "center",
                marginTop: "32px"
            }}>
                <button onClick={()=>{
                    root.render(<AppleCounter/>)
                }}>Re-Render</button>
            </p>
        </>

    )
}

export default AppleCounter;