import React, { useState, useContext } from 'react'
import { Context } from '../../../App'

function Input() {

    const speakingCharacters = useContext(Context);
    

  return (
    <input placeholder='Type character name...'></input>
  )
}

export default Input