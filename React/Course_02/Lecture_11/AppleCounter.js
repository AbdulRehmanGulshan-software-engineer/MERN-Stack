import React, { useState } from 'react'
import './style.css';

// console.log(import.meta.url);
const leftArrow = new URL('./assets/images/right-arrow.png', import.meta.url);
const rightArrow = new URL('./assets/images/arrow.png', import.meta.url)
export default function AppleCounter() {
    const [count1, setCount1] = useState(10);
    const [count2, setCount2] = useState(0);
    return (
        <div className='AppleCounter'>
            <div>
                <h2>{count1} Apples</h2>
                <p>Basket 01</p>
                <button onClick={() => {
                    if (count1 > 0) {
                        setCount1(count1 - 1);
                        setCount2(count2 + 1);
                    }
                }}><img src={leftArrow} alt="Left Arrow" /></button>
            </div>
            <div>
                <h2>{count2} Apples</h2>
                <p>Basket 02</p>
                <button onClick={() => {
                    if (count2 > 0) {
                        setCount1(count1 + 1);
                        setCount2(count2 - 1);
                    }
                }}><img src={rightArrow} alt="Left Arrow" /></button>
            </div>
        </div>

    )
}
