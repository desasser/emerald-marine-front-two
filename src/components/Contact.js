import { Typography, Button, TextField, TextareaAutosize } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import ContactInfo from './ContactInfo';

const useStyles = makeStyles(theme => ({
  footer: {
    background: 'linear-gradient(7.5deg, #74b4ab 50%, #78787a 50.5%)',
    minHeight: 400,
    marginTop: 50
  },
  footerLogoWrapper: {
    margin: '0 auto',
    width: 287
  },
  footerContent: {
    maxWidth: '80%',
    margin: '0 auto',
    padding: '30px'
  },
  contact: {
    float: 'right'
  },
  linkStyles: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    // display: 'inline-block'
  },
  flexWrapper: {
    display: 'flex',
  },
  iconStyle: {
    fontSize: '50px',
    color: '#78787a'
  },
  copyrightText: {
    margin: 0,
    textAlign: 'center'
  },
  formStyle: {
    margin: '10px auto',
    width: '50%'
  },
  inputStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: '0.5em',
    width: '100%',
    '& label.Mui-focused': {
      color: 'black',
      backgroundColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#74b4ab',
      },
    }
  }
}))

export default function Contact() {
  const classes = useStyles()

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
    setEmail('')
    API.addToMailingList(email).then(res => {
    }).catch(err => {
      console.log(err.message)
    });

  }

  return (
    <div>
      <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left' }}>Contact</Typography>
      <hr></hr>
      <p>Emerald Marine Products is an industry leader in industrial-grade, USA-made, Man Overboard Alerting, Water Rescue Dummy, and Retrieval Products. Please contact us through the contact form below, by telephone, or email.</p>
      <TextField className={classes.inputStyle} id="outlined-basic" label='Your Name' variant="outlined" onChange={handleChange} name='name' required />
      <TextField className={classes.inputStyle} id="outlined-basic" label='Your Email' variant="outlined" onChange={handleChange} name='email' required />
      <TextField className={classes.inputStyle} id="outlined-basic" label='Your Phone Number' variant="outlined" onChange={handleChange} name='phone' />
      <TextField className={classes.inputStyle} id="outlined-basic" label='Subject' variant="outlined" onChange={handleChange} name='subject' />
      <TextField className={classes.inputStyle} id="outlined-basic" label='Your Message' variant="outlined" onChange={handleChange} name='message' multiline rows={10} />
      <div style={{display:'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" style={{ marginTop: '10px', height: '56px', marginLeft: '10px', width: '100px', backgroundColor: '#74b4ab', fontSize: '16px' }} onClick={handleClick} >Submit</Button>
      </div>
      {/* <ContactInfo /> */}
    </div>
  )
}
