import React, { useContext, useEffect } from 'react'
import GuessResult from './GuessResult/GuessResult'
import { guessesContext } from '../Game'
import { characterDataContext } from '../../../App'
import './GuessesList.css'
import PropertyTitles from './PropertyTitles/PropertyTitles'

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

  useEffect(() => {
    console.log(guesses)
  }, ['guesses', guesses]);

  if (!guesses[0]) {
    return <div>no guesses yet</div>;
  }

  return (
    <div className='guesses-list'>
      <PropertyTitles/>
      {/* create a GuessResult (row) for each new guess */}
        {guesses.filter((guess) => guess !== null).map((guess, index) => (
          // reminder: each "guess" is really just the name
            <GuessResult key={index} guess={guess}/>
        ))}
    </div>
)
}

export default GuessesList