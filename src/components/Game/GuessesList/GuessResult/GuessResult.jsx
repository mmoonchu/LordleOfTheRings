import React, { useContext, useEffect } from 'react'
import Square from './Square/Square';
import { characterDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
    //class: 'square {closeness}'
    //text: 'propertykey'
    const lordleKey = useContext(lordleKeyContext);
    const characterData = useContext(characterDataContext)

    const createSquare = function() {
      if ([...characterData.docs].some((object) => object.character == lordleKey.name)) {
        return 'a'
      }
    }
    // console.log('cd:', characterData.docs)
    useEffect(() => {
      createSquare();
    }, [characterData])

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