import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Typography, TextField } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

export default function AddressModal() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
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
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h4" id="address-modal-title" style={{color: '#74b4ab'}}>Enter your shipping address</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='street' label='street' />
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='city' label='city' />
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='state' label='state' />
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='country' label='country' />
        <Button variant="contained" className={classes.buttonStyle} type='submit'>Enter</Button>
      </form>
      {/* <AddressModal /> */}
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
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