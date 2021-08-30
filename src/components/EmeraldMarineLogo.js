import React from 'react';
// import logo from '../images/Logo Rebuild color.svg'
import logo from '../images/EMP-Logo_white_480.png'

export default function emeraldMarineLogo( { className }) {
  return (
    <img
      src={logo}
      alt='Emerald Marine Products Logo'
      as='div'
      className={className}
    />
  )
}
