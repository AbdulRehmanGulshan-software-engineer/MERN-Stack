import React, { useState } from 'react'

export default function NewCounter({name}) {
    const[count,setCount] = useState(0);
    const[count2,setCount2] = useState(0);
  return (
    <>
    <h2>{name}</h2>
    <div className='flex gap-4 mt-6 items-center'>
        <button className=' bg-blue-400 px-4 py' onClick={()=>{setCount(count+1)}}>+</button>
        <h2>{count}</h2>
        <button className=' bg-blue-400 px-4 py' onClick={()=>{setCount(count-1)}}>-</button>
    </div>
    <div className='flex gap-4 mt-6 items-center'>
        <button className=' bg-blue-400 px-4 py' onClick={()=>{setCount2(count+1)}}>+</button>
        <h2>{count2}</h2>
        <button className=' bg-blue-400 px-4 py' onClick={()=>{setCount2(count-1)}}>-</button>
    </div>
    </>
  )
}
