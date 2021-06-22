import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core';
import API from '../utils/API';


export default function InputForm({ buttonText, classes, label, text }) {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log('email submitted', email)
    setEmail('')
    API.addToMailingList(email).then(res => {
    }).catch(err => {
      console.log(err.message)
    });
    
  }

  return (
    <form className={classes.formStyle}>
      <Typography style={{ textAlign: 'center', marginBottom: '0px' }}>{text}</Typography>
      <TextField className={classes.inputStyle} id="outlined-basic" label={label} variant="outlined" onChange={handleChange} name='email' />
      <Button variant="contained" style={{ marginTop: '10px', height: '56px', marginLeft: '10px', width: '100px', backgroundColor: 'goldenrod', fontSize: '16px' }} onClick={handleClick} >{buttonText}</Button>
    </form>
  )
}