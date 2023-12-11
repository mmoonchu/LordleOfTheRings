import React from "react";
import Input from "./Input/Input";
import GuessResult from "./GuessResult/GuessResult";

function Game() {

  return (
    <div className="game-window">
      <Input></Input>
      <GuessResult></GuessResult>
    </div>
  )
}

export default Game;

// {process.env.REACT_APP_KEY}
