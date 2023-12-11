import React, { useState, useEffect } from "react";
import Input from "./Input/Input";
import GuessesList from "./GuessesList/GuessesList";

export const guessesContext = React.createContext();

function Game() {

  const [guesses, setGuesses] = useState([]);

  const addNewGuessListItem = (guess) => {
    guesses.push(guess);
  }

  return (
    <div className="game-window">
      <guessesContext.Provider value={[guesses, setGuesses]}>
        <Input onNewGuess={addNewGuessListItem}/>
        <GuessesList/>
      </guessesContext.Provider>
    </div>
  )
}

export default Game;

// {process.env.REACT_APP_KEY}
