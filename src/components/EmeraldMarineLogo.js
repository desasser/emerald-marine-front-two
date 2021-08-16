import React from 'react';
import logo from '../images/Logo Rebuild color.svg'
// import logo from '../images/EMP-logo_color.png'

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
