import React, { useState, useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';
import './GuessResult.css';

function GuessResult(props) {
  const lordleKey = useContext(lordleKeyContext);
  const characterData = useContext(characterDataContext);
  const [squares, setSquares] = useState([]); // each square will hold color & property of 'this' particular GuessResult
  const currentGuessData = characterData.docs.find((object) => object.name == props.guess);

  class SquareObject {
    constructor(propertyName, color) {
      this.propertyName = propertyName;
      this.classes = `square ${color}`;
    }
  }

  const currentCharacter = {
    name: currentGuessData.name,
    race: currentGuessData.race,
    realm: currentGuessData.realm !== '' ? currentGuessData.realm : 'N/A',
    gender: currentGuessData.gender,
    height: currentGuessData.height !== '' ? currentGuessData.height : 'N/A',
  };

  const newArray = [];
  const createSquares = function() {
    for (const property in currentCharacter) {
      const propertyValue = currentCharacter[property];
      let propertyColor;

      if (propertyValue === lordleKey[property]) {
        propertyColor = 'green';
      } else if (property === 'name') {
        propertyColor = 'gray';
      } else {
        propertyColor = 'red';
      }
      newArray.push(new SquareObject(propertyValue, propertyColor));
    }
    setSquares(newArray);
  }
  useEffect(() => {
    createSquares();
  }, [])

  const guessClass = `guess-result ${props.guess}`

  return (
    <div className={guessClass}>
        {squares.map((square, index) => (
            <Square key={index} text={square.propertyName} classes={square.classes}/>
        ))}
    </div>
  )
}

export default GuessResult