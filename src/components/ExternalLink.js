import React from 'react'

export default function ExternalLink(props) {

  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  )
}