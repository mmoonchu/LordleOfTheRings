import React, { useContext, useState, useEffect } from 'react'
import { lordleKeyContext } from '../../../../App';
import Square from '../GuessResult/Square/Square';
import './PropertyTitles.css'

function PropertyTitles() {
    const lordleKey = useContext(lordleKeyContext);
    const [squares, setSquares] = useState([]);
    
  useEffect(() => {
    const newArray = [];
    for (const property in lordleKey) {
        if (property !== 'quote') {
            const newString = property.charAt(0).toUpperCase() + property.slice(1);
            newArray.push({ propertyName: newString });
        }
    }
    setSquares(newArray);
  }, [lordleKey])

  return (
    <div className='property-titles'>
        {squares.map((square, index) => (
            <Square key={index} text={square.propertyName} classes='square property-title'/>
        ))}
    </div>
  )
}

export default PropertyTitles