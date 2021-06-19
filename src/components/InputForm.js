import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core';



export default function InputForm({ buttonText, classes, label, text }) {

  return (
    <form className={classes.formStyle}>
      <Typography style={{ textAlign: 'center', marginBottom: '0px' }}>{text}</Typography>
      <TextField className={classes.inputStyle} id="outlined-basic" label={label} variant="outlined" />
      <Button variant="contained" style={{ marginTop: '10px', height: '56px', marginLeft: '10px', width: '100px', backgroundColor: '#f5ed5eff', fontSize: '16px' }}>{buttonText}</Button>
    </form>
  )
}