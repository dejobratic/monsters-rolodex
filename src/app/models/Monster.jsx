import React from "react";

const Monster = ({ monster = {} }) => {
  return (
    <div>
      <h1>{monster.name}</h1>
    </div>
  );
};

export default Monster;
