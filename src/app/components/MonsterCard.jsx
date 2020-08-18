import React from 'react'

import Card from './Card'

const MonsterCard = ({ monster = {} }) => {
  return (
    <Card
      name={monster.name}
      email={monster.email}
      image={monster.image}
    />
  )
}

export default MonsterCard
