import React, { useState, useEffect } from 'react'
import './card-collection.styles.css'
import Monster from './monster.component'
import { monsterService } from '../services/MonsterService'

const MonsterCollection = () => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const monsters = await monsterService.getMonsters()
      setMonsters(monsters)
    }
    fetchData()
  }, [])

  return (
    <div className='card-collection'>
      {monsters.map((monster) => (
        <Monster key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default MonsterCollection
