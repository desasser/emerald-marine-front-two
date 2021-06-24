import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core';
import API from '../utils/API';
import ProgressIndicator from './admin/ProgressIndicator';


export default function InputForm({ buttonText, classes, label, text }) {
  const [email, setEmail] = useState('');
  const [indicator, setIndicator] = useState({
    open: false,
    severity: '',
    message: ''
  })

  const handleChange = e => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('')
    API.addToMailingList(email).then(res => {
    }).catch(err => {
      console.log(err.message)
      setIndicator({
        open: true,
        severity: 'error',
        message: `Error subscribing to mailing list: ${err.message}`
      });
    });
    setIndicator({
      open: true,
      severity: 'success',
      message: 'Successfully subscribed to mailing list.'
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIndicator({
      ...indicator, open: false
    });
  };

  return (
    <form className={classes.formStyle} onSubmit={handleSubmit}>
      <Typography style={{ textAlign: 'center', marginBottom: '0px' }}>{text}</Typography>
      <TextField className={classes.inputStyle} id="outlined-basic" label={label} variant="outlined" onChange={handleChange} name='email' value={email} />
      <Button variant="contained" style={{ marginTop: '10px', height: '56px', marginLeft: '10px', width: '100px', backgroundColor: 'goldenrod', fontSize: '16px' }} type="submit" >{buttonText}</Button>
      <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
    </form>
  )
}