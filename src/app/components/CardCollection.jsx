import React from "react"

import Card from "./Card"

import "./CardCollection.css"

const CardCollection = ({ items = {} }) => {
  return (
    <div className="card-collection">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CardCollection
