import React from 'react'

import Card from './card.component'

const Monster = ({ monster = {} }) => {
  return (
    <Card
      name={monster.name}
      email={monster.email}
      image={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
  )
}

export default Monster
