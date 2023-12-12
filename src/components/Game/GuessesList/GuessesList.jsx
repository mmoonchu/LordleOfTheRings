import React, { useContext } from 'react'
import GuessResult from './GuessResult/GuessResult'
import { guessesContext } from '../Game'
import { characterDataContext } from '../../../App'

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

function GuessesList(props) {
  const [guesses, setGuesses] = useContext(guessesContext)

  return (
    <div className='guesses-list'>
      {/* create a GuessResult (row) for each new guess */}
        {guesses.map((guess, index) => (
          // reminder: each "guess" is really just the name
            <GuessResult key={index} guess={guess}/>
        ))}
    </div>
)
}

export default GuessesList