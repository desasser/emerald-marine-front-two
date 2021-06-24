import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
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
