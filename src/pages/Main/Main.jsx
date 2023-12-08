import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

function Main() {
  return (
    <div className='main-menu'>
      <Link to='/Play'>Play</Link>
      <Link to='/About'>About</Link>
    </div>
  )
}

export default Main