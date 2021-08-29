import { Typography, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import ContactInfo from './ContactInfo';
import ReCaptchaV2 from 'react-google-recaptcha';

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
  },
  formControl: {
    minWidth: '100%',
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
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function Contact() {
  const classes = useStyles()

  const [email, setEmail] = useState('');
  const [preferredContact, setPreferredContact] = useState('');

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setEmail({
  //     ...email,
  //     [name]: value
  //   });
  // }
  // 
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSelect = e => {
    setPreferredContact(e.target.value);
  }
  // 
  const onSubmit = (e) => {
    e.preventDefault();
    // setEmail('')
    // API.addToMailingList(email).then(res => {
    // }).catch(err => {
    //   console.log(err.message)
    // });
    console.log('submit')
  }

  console.log(process.env)

  return (
    <div>
      <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left' }}>Contact</Typography>
      <hr></hr>
      <Typography variant='body1' style={{ margin: '1rem 0' }}>
        Emerald Marine Products is an industry leader in industrial-grade, USA-made, Man Overboard Alerting, Water Rescue Dummy, and Retrieval Products. Please contact us through the contact form below, by telephone, or email.
      </Typography>
      <ContactInfo color='black' />
      <form onSubmit={onSubmit}>
        <TextField className={classes.inputStyle} id="outlined-basic" label='Your Name' variant="outlined" onChange={handleChange} name='name' required />

        <FormControl className={classes.formControl} required>
          <InputLabel id="contact-method-select-label" style={{marginLeft: '15px'}}>Preferred Contact Method</InputLabel>
          <Select
            labelId="contact-method-select-label"
            id="contact-method-select"
            value={preferredContact}
            onChange={handleSelect}
            variant="outlined"
          >
            <MenuItem value="Phone">Phone</MenuItem>
            <MenuItem value="Email">Email</MenuItem>
            <MenuItem value="Text">Text</MenuItem>
          </Select>
        </FormControl>

        <TextField className={classes.inputStyle} id="outlined-basic" label='Your Email' variant="outlined" onChange={handleChange} name='email' required />
        <TextField className={classes.inputStyle} id="outlined-basic" label='Your Phone Number' variant="outlined" onChange={handleChange} name='phone' />
        <TextField className={classes.inputStyle} id="outlined-basic" label='Subject' variant="outlined" onChange={handleChange} name='subject' required />
        <TextField className={classes.inputStyle} id="outlined-basic" label='Your Message' variant="outlined" onChange={handleChange} name='message' multiline rows={10} required />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} />
          <Button variant="contained" style={{ margin: '1rem 0', height: '56px', width: '100px', backgroundColor: '#f5ed5e', fontSize: '16px' }} type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  )
}
