import React, { useState, useContext } from 'react'
import { Context } from '../../../App'

function Input() {

    const speakingCharacters = useContext(Context);
    

  return (
    <div>
        <input list='characterList' placeholder='Type character name...'/>
        <datalist id='characterList'>
            {speakingCharacters.map((character, index) => (
                <option key={index} value={character} />
            ))}
        </datalist>
    </div>
  )
}

export default Input