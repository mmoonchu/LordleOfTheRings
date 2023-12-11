import React, { useContext } from 'react'
import Square from './Square/Square';
import { lordleKeyContext } from '../../../../App';

function GuessResult(props) {
    //class: 'square {closeness}'
    //text: 'propertykey'
    const lordleKey = useContext(lordleKeyContext);

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
        <p>{props.guess}</p>
    </div>
  )
}

export default GuessResult