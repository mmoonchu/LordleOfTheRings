import React from "react";
import Input from "./Input/Input";
import GuessesList from "./GuessesList/GuessesList";

function Game() {

  return (
    <div className="game-window">
      <Input/>
      <GuessesList/>
    </div>
  )
}

export default Game;

// {process.env.REACT_APP_KEY}
