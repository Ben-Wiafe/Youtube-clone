import React from 'react'
import './foter.css'
function foter({selected,image,title,price,}) {
  return (

    <div className={`prop ${selected && 'selected'}`}>
    <img src={image} alt='image name'/>
    <p className='text'>{title}</p>
    <h3 className='price'>{price}</h3>

    </div>
  )
}

export default foter