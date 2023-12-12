import React, { useContext, useState, useEffect } from 'react'
import { lordleKeyContext } from '../../../../App';
import Square from '../GuessResult/Square/Square';
import './PropertyTitles.css'

function PropertyTitles() {
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
    console.log('creating titles!')
    createSquares();
  }, [null])

  return (
    <div className='property-titles'>
        {squares.map((square, index) => (
            <Square key={index} text={square.propertyName} classes='square property-title'/>
        ))}
    </div>
  )
}

export default PropertyTitles