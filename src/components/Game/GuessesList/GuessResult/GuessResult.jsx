import React, { useContext } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
    //class: 'square {closeness}'
    //text: 'propertykey'
    const lordleKey = useContext(lordleKeyContext);
    const movieData = useContext(characterDataContext)

    if (movieData.docs.some((object) => {
      object.character == lordleKey.name
    })) {
      console.log('idk')
    }

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