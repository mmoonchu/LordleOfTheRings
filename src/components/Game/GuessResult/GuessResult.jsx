import React from 'react'
import Square from './Square/Square';

function GuessResult() {
    //class: 'square {closeness}'
    //text: 'propertykey'

    const GuessPropertyList = ({ properties }) => {
        return (
          <Square class='' text=''></Square>
        );
      };

  return (
    <div>
        <GuessPropertyList/>
    </div>
  )
}

export default GuessResult