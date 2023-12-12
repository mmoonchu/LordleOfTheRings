import React, { useState, useEffect } from "react";
import Input from "./Input/Input";
import GuessesList from "./GuessesList/GuessesList";

export const guessesContext = React.createContext();

function Game() {

  const [guesses, setGuesses] = useState([]);

  const addNewIncorrectGuess = (guess) => {
    const newArray = [...guesses, guess];
    setGuesses(newArray);
  }

  return (
    <div className="game-window">
      <guessesContext.Provider value={[guesses, setGuesses]}>
        <Input onIncorrectGuess={addNewIncorrectGuess}/>
        <GuessesList/>
      </guessesContext.Provider>
    </div>
  )
}

export default Game;

// {process.env.REACT_APP_KEY}
