import React, { useState, useContext, useEffect } from 'react'
import { characterListContext, lordleKeyContext } from '../../../App'
import './Input.css'

function Input() {
    const speakingCharacters = useContext(characterListContext);
    const lordleKey = useContext(lordleKeyContext);
    const [inputValue, setInputValue] = useState('');
    const [userGuess, setUserGuess] = useState(null);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserGuess(inputValue);
        console.log(inputValue);
    }
    const checkUserGuess = function() {
        if (userGuess === lordleKey.name) {
            // player wins
            console.log('you win!')
        } else {
            // handleIncorrectGuess(userGuess);
        }
    }
    useEffect(() => {
        checkUserGuess();
    }, [userGuess])
    
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