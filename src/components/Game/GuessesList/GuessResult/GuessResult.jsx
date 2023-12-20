import React, { useState, useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';
import './GuessResult.css';

function GuessResult(props) {
  const lordleKey = useContext(lordleKeyContext);
  const characterData = useContext(characterDataContext);
  const [squares, setSquares] = useState([]); // each square will hold color & property of 'this' particular GuessResult

  useEffect(() => {
    const currentGuessData = characterData.docs.find((object) => object.name === props.guess);
    const currentRealm = currentGuessData.realm.split(',').join(', ');

    const currentCharacter = {
      name: currentGuessData.name,
      race: currentGuessData.race,
      realm: currentGuessData.realm !== '' ? currentRealm : 'N/A',
      gender: currentGuessData.gender,
      height: currentGuessData.height !== '' ? currentGuessData.height : 'N/A',
      quote: ''
    };
    console.log('key:', lordleKey)

    
    const newArray = [];
    for (const property in currentCharacter) {
      const propertyValue = currentCharacter[property];
      let propertyColor;
      let heightArrow = '';

      if (propertyValue === lordleKey[property]) {
        propertyColor = 'green';
      } else if (property === 'name' || property === 'quote') {
        propertyColor = 'gray';
      } else {
        propertyColor = 'red';
        if (property === 'height') {
          let guessHeight = Number(propertyValue.split('m')[0]);
          let keyHeight = Number((lordleKey[property].split('m')[0].slice(-1) === 'c' ? lordleKey[property].split('c')[0] : lordleKey[property].split('m')[0]));
          if (guessHeight < keyHeight) {
            heightArrow = 'up-arrow';
          } else if (guessHeight > keyHeight) {
            heightArrow = 'down-arrow';
          } else if (guessHeight === keyHeight) {
            return;
          } else {
            heightArrow = 'qmark-arrow';
          }
        }
      }
      if (property !== 'quote') {
        newArray.push({ propertyName: propertyValue, classes: `square ${propertyColor} ${heightArrow}` });
      }
    }

    setSquares(newArray);
  }, [lordleKey])

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