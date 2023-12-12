import React, { useState, useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
  //class: 'square {closeness}'
  //text: 'propertykey'
  const lordleKey = useContext(lordleKeyContext);
  const characterData = useContext(characterDataContext);
  const [squares, setSquares] = useState([]); // each square will hold closeness & property of 'this' particular GuessResult

  return (
    <div>
        {squares.map((square, index) => (
            <Square/>
        ))}
    </div>
  )
}

export default GuessResult