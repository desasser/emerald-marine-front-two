import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import logo from '../images/EMP-logo_color.png'

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
