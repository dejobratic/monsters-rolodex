import React from 'react'

import './card.styles.css'

const Card = ({ name, email, image }) => {
  return (
    <div className='card-container'>
      <img alt='image' src={image} />
      <h1>{name}</h1>
    </div>
  )
}

export default Card
