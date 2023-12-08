import React from 'react'
import MainMenuButton from '../../components/MainMenuButton'
import Game from '../../components/Game/Game'

function Play() {
  return (
    <div className='play-page'>
        <MainMenuButton/>
        <Game />
    </div>
  )
}

export default Play