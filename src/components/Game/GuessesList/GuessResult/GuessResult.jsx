import React, { useState, useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
  const lordleKey = useContext(lordleKeyContext);
  const characterData = useContext(characterDataContext);
  const [squares, setSquares] = useState([]); // each square will hold color & property of 'this' particular GuessResult
  const currentGuessData = characterData.docs.find((object) => object.name == lordleKey.name);
  console.log(currentGuessData)

  class Square {
    constructor(propertyName, color) {
      this.propertyName = propertyName;
      this.color = color;
    }
  }
  
  // const nameSquare = new Square(characterName, red);
  // const raceSquare = new Square(race, red);
  // const realmSquare = new Square(realm, red);
  // const genderSquare = new Square(gender, red);
  // const heightSquare = new Square(height, red);

  return (
    <div>
        {squares.map((square, index) => (
            <Square/>
        ))}
    </div>
  )
}

export default GuessResult