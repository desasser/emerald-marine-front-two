import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import madeInUsa from '../images/MadeInUsa_grey_solid.png'

export default function emeraldMarineLogo( { className }) {
  return (
    <img
      src={madeInUsa}
      alt='Made in USA Icon'
      as='div'
      className={className}
    />
  )
}
