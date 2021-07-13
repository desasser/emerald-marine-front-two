import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import madeInUsa from '../images/made-in-usa.png'

export default function emeraldMarineLogo( { className }) {
  return (
    <img
      src={madeInUsa}
      alt='Made in USA'
      as='div'
      className={className}
    />
  )
}
