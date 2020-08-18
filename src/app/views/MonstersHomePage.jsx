import React, { useState, useEffect } from "react"

import SearchBox from "../components/SearchBox"
import MonsterCardCollection from "../components/MonsterCardCollection"

import { monsterService } from "../services/MonsterService"

const MonstersHomePage = () => {
  const [monsters, setMonsters] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters = await monsterService.getAll()
      setMonsters(monsters)
    }

    fetchMonsters()
  }, [])

  const onSearchInputChange = (newSearchInput) => {
    setSearchInput(newSearchInput)
  }

  const filteredMonsters =
    searchInput === ""
      ? monsters
      : monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchInput.toLowerCase())
        )

  return (
    <>
      <h1>Monsters Rolodex</h1>
      <SearchBox onInputChange={onSearchInputChange} />
      <MonsterCardCollection monsters={filteredMonsters} />
    </>
  )
}

export default MonstersHomePage
