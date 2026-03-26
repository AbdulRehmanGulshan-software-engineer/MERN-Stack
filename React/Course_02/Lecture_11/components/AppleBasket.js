import React from 'react'

export const AppleBasket = ({ appleCount, basketName }) => {
    return (
        <div className='appleBasket'>
            <h2>
                <span>{appleCount}</span> Apples
            </h2>
            <p>{basketName}</p>
        </div>
    )
}

export default AppleBasket;