import React from 'react'
import Rescue from '../images/rescue.jpg'

export default function Hero() {

  return (
    <div
      style={{backgroundImage: `url(${Rescue})`, height: '500px', backgroundSize: 'cover', width: '80%', backgroundPosition: 'bottom'}}
      alt='Man overboard rescue exercise'
    />
  )
}