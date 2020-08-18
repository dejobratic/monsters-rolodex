import React from "react"

import "./Card.css"

const Card = ({ name, email, image }) => {
  return (
    <div className="card-container">
      <img alt={name} src={image} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

export default Card
