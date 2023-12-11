import React, { useContext } from 'react'
import GuessResult from './GuessResult/GuessResult'
import { guessesContext } from '../Game'

// const GuessesList = ({ GuessesListItems }) => {
//   const [guesses, setGuesses] = useContext([guesses, setGuesses])
//     return (
//         <div className='guesses-list'>
//             {/* {guesses.map((guess) => (
//                 <GuessResult/>
//             ))} */}
//         </div>
//     )
// }

function GuessesList({ GuessesListItems }) {
  const [guesses, setGuesses] = useContext(guessesContext)
    return (
        <div className='guesses-list'>
            {guesses.map((guess, index) => (
                <GuessResult key={index} guess={guess}/>
            ))}
        </div>
    )
}

export default GuessesList