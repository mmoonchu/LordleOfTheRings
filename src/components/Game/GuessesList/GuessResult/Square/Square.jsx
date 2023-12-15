import React from 'react'
import './Square.css'

function Square(props) {
  return (
    <div className={props.classes}> {props.text} </div>
  )
}

export default Square