import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <Link to='/'>Back to Main Menu</Link><br/>
      <h1 className='about h1'>Lordle of the Rings</h1>
      <h6 className='about'>A Wordle-inspired "Lord of the Rings"-themed game where you must try and guess the secret character from Tolkien's Legendarium in as few tries as possible</h6>
    </div>
  )
}

export default About