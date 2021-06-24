import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '0.5em'
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
  buttonStyle: {
    margin: 10,
    backgroundColor: 'goldenrod'
  }
}));

export default function AddressModal({ onChange, onSubmit }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log('submit');
  }

  const handleChange = () => {
    console.log('change')
  }

  const body = (
    <div style={{    top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`,}} className={classes.paper}>
      <Typography variant="h4" id="address-modal-title" style={{color: '#74b4ab'}}>Enter your shipping address</Typography>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={onChange} name='name' label='name' required/>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={onChange} name='street1' label='street' required/>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={onChange} name='city' label='city' required/>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={onChange} name='state' label='state/province' required/>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={onChange} name='zip' label='postal code' required/>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={onChange} name='country' label='country' required/>
        <Button variant="contained" className={classes.buttonStyle} type='submit'>Submit</Button>
      </form>
      {/* <AddressModal /> */}
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="outlined">
        CHECK SHIPPING
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="shipping-address-modal"
        aria-describedby="shipping-address-modal-data-entry"
      >
        {body}
      </Modal>
    </div>
  );
}