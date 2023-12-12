import React, { useContext, useState, useEffect } from 'react'
import { lordleKeyContext } from '../../../../App';
import Square from '../GuessResult/Square/Square';
import './AnswerTitles.css'

function AnswerTitles() {
    const lordleKey = useContext(lordleKeyContext);
    const [squares, setSquares] = useState([]);

    class SquareObject {
        constructor(propertyName) {
            this.propertyName = propertyName;
        }
    }

    const newArray = [];
    const createSquares = function() {
        for (const property in lordleKey) {
            newArray.push(new SquareObject(property));
        }
        setSquares(newArray);
    }
  useEffect(() => {
    createSquares();
  }, [])

  return (
    <div className='answer-titles'>
        {squares.map((square, index) => (
            <Square key={index} text={square.propertyName} classes='square answer-title'/>
        ))}
    </div>
  )
}

export default AnswerTitles