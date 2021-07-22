import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core';
import API from '../utils/API';
import ProgressIndicator from './admin/ProgressIndicator';
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
    marginBottom: '0px',
    color: 'white'
  },
  button: {
    marginTop: '10px',
    height: '40px',
    // width: '50%', 
    backgroundColor: 'goldenrod',
    fontSize: '16px',
    boxShadow: '0 1px 4px 0 #BDC9D7',
    '&:hover': {
      borderColor: '#74b4ab',
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "1em"
    },
  },
  containerClass: {
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    direction: "column",
    wrap: 'wrap',
    flexGrow: 1,
  }
}));

export default function InputForm({ buttonText, classes, label, text }) {

  const customClasses = useStyles();
  console.log(classes)

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
      setIndicator({
        open: true,
        severity: 'success',
        message: 'Successfully subscribed to mailing list.'
      });
    }).catch(err => {
      console.log(err.message)
      setIndicator({
        open: true,
        severity: 'error',
        message: `Error subscribing to mailing list: ${err.message}`
      });
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
      <Grid container className={customClasses.containerClass}>
        <Grid item xs={12}>
          <Typography className={customClasses.text}>{text}</Typography>
        </Grid>
        <div style={{display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Grid item md={8} xs={12}>
            <TextField className={classes.inputStyle} id="outlined-basic" label={label} variant="outlined" onChange={handleChange} name='email' value={email} size='small' />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button className={customClasses.button} variant="contained" type="submit" >{buttonText}</Button>
          </Grid>
        </div>
        <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
      </Grid>
    </form>
  )
}