import React, { useState, useEffect } from "react";

import Monster from "./models/Monster";

import "./App.css";

const state = {
  monsters: [
    {
      id: 1,
      name: "Karakondzula",
    },
    {
      id: 2,
      name: "Drekavac",
    },
    {
      id: 3,
      name: "Vampir",
    },
  ],
};

const App = () => {
  return (
    <div className="App">
      {state.monsters.map((monster) => (
        <Monster key={monster.id} monster={monster}></Monster>
      ))}
    </div>
  );
};

export default App;
