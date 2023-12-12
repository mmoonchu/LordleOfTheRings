import React, { useState, useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
  const lordleKey = useContext(lordleKeyContext);
  const characterData = useContext(characterDataContext);
  const [squares, setSquares] = useState([]); // each square will hold color & property of 'this' particular GuessResult
  const currentGuessData = characterData.docs.find((object) => object.name == lordleKey.name);

  class Square {
    constructor(propertyName, color) {
      this.propertyName = propertyName;
      this.color = color;
    }
  }

  const currentCharacter = {
    name: currentGuessData.name,
    race: currentGuessData.race,
    realm: currentGuessData.realm !== '' ? currentGuessData.realm : 'N/A',
    gender: currentGuessData.gender,
    height: currentGuessData.height !== '' ? currentGuessData.height : 'N/A',
  };
  console.log(currentCharacter)

  const newArray = [];
  for (const propertyName in currentCharacter) {
    newArray.push(new Square(currentCharacter[propertyName], 'red'))
  }
  console.log(newArray)
  
  // const nameSquare = new Square(currentGuessData.name, 'red');
  // const raceSquare = new Square(currentGuessData.race, 'red');
  // const realmSquare = new Square(currentGuessData.realm, 'red');
  // const genderSquare = new Square(currentGuessData.gender, 'red');
  // const heightSquare = new Square(currentGuessData.height, 'red');

  return (
    <div>
        {squares.map((square, index) => (
            <Square/>
        ))}
    </div>
  )
}

export default GuessResult