import React, { useState, useContext, useEffect } from 'react'
import { characterNameListContext, lordleKeyContext } from '../../../App'
import './Input.css'
import { guessesContext } from '../Game';

function Input(props) {
    const speakingCharacters = useContext(characterNameListContext);
    const lordleKey = useContext(lordleKeyContext);
    const [guesses, setGuesses] = useContext(guessesContext)
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        handleIncorrectGuess(inputValue);
        console.log(inputValue);
    }
    // const checkGuess = function() {
    //     if (guess === lordleKey.name) {
    //         // player wins
    //         console.log('you win!');
    //     } else {
    //         // handleIncorrectGuess(guess);
    //     }
    //     // move this back up to if statement's "else" once ready to properly implement correct guess handling
    //     handleIncorrectGuess(inputValue);
    // }
    const handleIncorrectGuess = function(incorrectGuess) {
        props.onIncorrectGuess(incorrectGuess);
        // REMOVE guessed name from available names (the dropdown)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input list='characterList' placeholder='Type character name...' value={inputValue} onChange={handleInputChange}/>
            <datalist id='characterList'>
                {speakingCharacters.map((character, index) => (
                    <option key={index} value={character} />
                ))}
            </datalist>
        </form>
    )
}

export default Input