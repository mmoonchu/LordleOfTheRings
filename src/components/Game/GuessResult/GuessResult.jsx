import React, { useState, useContext } from 'react'
import { Context } from '../../../App'

function GuessResult() {

    const speakingCharacters = useContext(Context);

  return (
    <div>{speakingCharacters}</div>
  )
}

export default GuessResult