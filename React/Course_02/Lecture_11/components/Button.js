import React from "react"
export default function Button({ imageURL, buttonName ,onClick}) {
  return (
    <button onClick={onClick} title={buttonName}>
      <img src={imageURL} alt={buttonName}/>
    </button>
  )
}
