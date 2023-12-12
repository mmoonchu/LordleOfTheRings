import React, { useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
  //class: 'square {closeness}'
  //text: 'propertykey'
  const lordleKey = useContext(lordleKeyContext);
  const characterData = useContext(characterDataContext);

  return (
    <div>
        {/* <GuessPropertyList guessProperties={incorrectGuess}/> */}
        <p>{props.guess}</p>
    </div>
  )
}

export default GuessResult