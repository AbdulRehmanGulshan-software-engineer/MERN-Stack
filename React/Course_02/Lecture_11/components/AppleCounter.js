import React from 'react'
import Button from './Button';
import AppleBasket from './AppleBasket';
import './AppleCounter.css';

const leftArrow = new URL('../assets/images/arrow.png', import.meta.url);
const rightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);

export const AppleCounter = () => {
    return (
        <div className='AppleCounter'>
            <AppleBasket appleCount={10} basketName={"Basket 1"} />
            <Button imageURL={leftArrow} />
            <Button imageURL={rightArrow} />
            <AppleBasket appleCount={0} basketName={"Basket 2"} />
        </div>
    )
}

export default AppleCounter;