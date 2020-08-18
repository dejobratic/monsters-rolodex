import React from 'react'
import './CardCollection.css'
import MonsterCard from './MonsterCard'

const MonsterCardCollection = ({ monsters = [] }) => {
  return (
    <div className='card-collection'>
      {monsters.map((monster) => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default MonsterCardCollection
