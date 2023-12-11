import React, { useContext } from 'react'
import Square from './Square/Square';
import { movieDataContext, lordleKeyContext } from '../../../../App';

function GuessResult(props) {
    //class: 'square {closeness}'
    //text: 'propertykey'
    const lordleKey = useContext(lordleKeyContext);
    const movieData = useContext(movieDataContext)

    // for (const property in lordleKey) {
    //   if (movieData.docs.some((object) => {
    //     console.log(object)
    //   })) {console.log('idk')}
    //   // lordleKey[property]
    // }
    console.log('mv:', movieData)

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