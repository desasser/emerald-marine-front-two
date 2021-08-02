import { Typography } from '@material-ui/core'
import React from 'react'

export default function Thank() {
  return (
    <div style={{minHeight:'50vh', width: '60%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h1" style={{textAlign: 'center', margin: '1rem', color: '#74b4ab'}}>
        Thank you for requesting a quote from us!
      </Typography>
      <Typography style={{textAlign: 'center', width:'60%' }}>
        We will be in touch within 24 hours, if you have an immediate need please call us at 1-(800)-426-4201.
      </Typography>
    </div>
  )
}
