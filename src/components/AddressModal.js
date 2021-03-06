import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Typography, TextField, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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

export default function AddressModal({ onChange, onSubmit, name, street, city, state, zip, country }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{ top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, }} className={classes.paper}>
      <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Typography variant="h4" id="address-modal-title" style={{ color: '#74b4ab', marginBottom: '1rem' }}>Enter your shipping address</Typography>
      <Typography variant="body2">This shipping estimate is based on UPS shipping rates and is subject to change at the time of order.</Typography>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField className={classes.inputStyle} value={name} id="outlined-basic" variant="outlined" onChange={onChange} name='name' label='name' required />
        <TextField className={classes.inputStyle} value={street} id="outlined-basic" variant="outlined" onChange={onChange} name='street1' label='street' required />
        <TextField className={classes.inputStyle} value={city} id="outlined-basic" variant="outlined" onChange={onChange} name='city' label='city' required />
        <TextField className={classes.inputStyle} value={state} id="outlined-basic" variant="outlined" onChange={onChange} name='state' label='state/province' required />
        <TextField className={classes.inputStyle} value={zip} id="outlined-basic" variant="outlined" onChange={onChange} name='zip' label='postal code' required />
        <TextField className={classes.inputStyle} value={country} id="outlined-basic" variant="outlined" onChange={onChange} name='country' label='country' required />
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