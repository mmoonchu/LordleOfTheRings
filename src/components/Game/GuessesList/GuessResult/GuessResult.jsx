import React from 'react'
import Square from './Square/Square';

function GuessResult() {
    //class: 'square {closeness}'
    //text: 'propertykey'

    const GuessPropertyList = ({ guessProperties }) => {
        return (
          <div className='rectangle'>
            {guessProperties.map((guessProperty) => (
                <Square class='' text=''/>
            ))}
          </div>
        );
      };

  return (
    <div>
        {/* <GuessPropertyList guessProperties={incorrectGuess}/> */}
        <p>hello</p>
    </div>
  )
}

export default GuessResult