import React, { useState, useEffect } from "react"

import Monster from "./components/Monster"

import { monsterService } from "./services/MonsterService"

import "./App.css"

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const monsters = await monsterService.getMonsters();
      setMonsters(monsters);
    };
    fetchData()
  }, []);

  return (
    <div className="App">
      {monsters.map((monster) => (
        <Monster key={monster.id} monster={monster}></Monster>
      ))}
    </div>
  );
};

export default App
