import React, { useState } from 'react'
import { TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import API from '../utils/API';
import { makeStyles } from "@material-ui/core";
import Page from "../components/Page"
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    margin: '1rem',
  },
  img: {
    width: 128,
    // height: 128,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Purchase() {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    email: '',
    phone: '',
    ccNum: '',
    ccExp: '',
    ccCode: '',
    ccType: '',
  });
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [checked, setChecked] = useState(false)
  const classes = useStyles();
  const toPurchase = useSelector(state => state.purchaseReducer.purchaseProducts)

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    console.log('name', name)
    console.log('value', value)
    setDetails({ ...details, [name]: value });
  }

  const handleShippingChange = e => {
    const { name, value } = e.target;
    console.log('name', name)
    console.log('value', value)
    setShippingDetails({ ...shippingDetails, [name]: value });
  }

  const handleSelectChange = e => {
    setDetails({ ...details, ccType: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (checked) {
      // submit to API with just billing info
    } else {
      // submit to API with billing and shipping info
    }
    console.log('submit');
  }

  return (
    <Page>
      <div style={{ maxWidth: '80%', minHeight: '60vh', marginTop: '3rem' }}>
        <Typography variant='h2' style={{ color: '#74b4ab' }}>Purchase Form</Typography>
        <hr style={{ width: '80vw' }}></hr>
        <form style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" style={{ color: '#74b4ab', marginRight: '2rem' }}>
                Items
              </Typography>
              {toPurchase.map(item =>
                // <CartCard key={item.SKU} title={item.name} classes={classes} sku={item.SKU} price={item.price} shipping={item.rate ? `$${item.rate}` : 'n/a'} image={item.image} id={item._id} quantity={item.quantity}></CartCard>
                <Grid container style={{ disaply: 'flex', alignItems: 'center' }} spacing={2}>
                  <Grid item xs={12} sm={2}>
                    <img className={classes.img} alt={item.product.name} src={item.product.image} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    {item.product.name}
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography>{item.color}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                      <Typography>Quantity:</Typography>
                      <Typography>{item.quantity.quantity}</Typography>
                    </div>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                      <Typography>Price:</Typography>
                      <Typography>{`$${item.product.price}`}</Typography>
                    </div>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                      <Typography>Total Price:</Typography>
                      <Typography>{`$${(item.product.price * item.quantity.quantity).toFixed(2)}`}</Typography >
                    </div>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12} >
                <Typography variant="h4" style={{ color: '#74b4ab' }}>Payment Info</Typography>
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl required style={{ width: '80%', marginTop: '1rem', marginLeft: '1rem' }}>
                      <InputLabel id="demo-simple-select-required-label">Select Credit Card Type</InputLabel>
                      <Select
                        labelId="select-label-credit-card-type"
                        id="credit-card-type-select"
                        value={details.ccType}
                        onChange={handleSelectChange}
                        variant="filled"
                        required
                      >
                        <MenuItem value='MasterCard'>MasterCard</MenuItem>
                        <MenuItem value='Visa'>Visa</MenuItem>
                        <MenuItem value='AmericanExpress'>AmericanExpress</MenuItem>
                        <MenuItem value='Discover'>Discover</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='credit card number' variant="outlined" onChange={handleChange} name='ccNum' value={details.ccNum} required style={{ width: '80%' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='expiration date' variant="outlined" onChange={handleChange} name='ccExp' value={details.ccExp} required style={{ width: '80%' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='credit card code' variant="outlined" onChange={handleChange} name='ccCode' value={details.ccCode} required style={{ width: '80%' }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} >
                <Typography variant="h4" style={{ color: '#74b4ab' }}>Billing Info</Typography>
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='first name' variant="outlined" onChange={handleChange} name='firstName' value={details.firstName} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='last name' variant="outlined" onChange={handleChange} name='lastName' value={details.lastName} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='shipping address' variant="outlined" onChange={handleChange} name='streetAddress' value={details.streetAddress} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='city' variant="outlined" onChange={handleChange} name='city' value={details.city} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='state/province' variant="outlined" onChange={handleChange} name='state' value={details.state} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='zip/postal code' variant="outlined" onChange={handleChange} name='zip' value={details.zip} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='country' variant="outlined" onChange={handleChange} name='country' value={details.country} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='email' variant="outlined" onChange={handleChange} name='email' value={details.email} required />
                <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='phone number' variant="outlined" onChange={handleChange} name='phone' value={details.phone} required />
              </Grid>
              <Grid item xs={12} >
                <div style={{ display: 'flex' }}>
                  <Typography variant="h4" style={{ color: '#74b4ab', marginRight: '2rem' }}>Shipping Info</Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheck}
                        style={{ color: 'goldenrod' }}
                      />
                    }
                    label="Same as billing"
                  />
                </div>
                {!checked ?
                  (
                    <>
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='first name' variant="outlined" onChange={handleShippingChange} name='firstName' value={details.firstName} required />
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='last name' variant="outlined" onChange={handleShippingChange} name='lastName' value={details.lastName} required />
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='shipping address' variant="outlined" onChange={handleShippingChange} name='streetAddress' value={details.streetAddress} required />
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='city' variant="outlined" onChange={handleShippingChange} name='city' value={details.city} required />
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='state/province' variant="outlined" onChange={handleShippingChange} name='state' value={details.state} required />
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='zip/postal code' variant="outlined" onChange={handleShippingChange} name='zip' value={details.zip} required />
                      <TextField size='small' className={classes.inputStyle} id="outlined-basic" label='country' variant="outlined" onChange={handleShippingChange} name='country' value={details.country} required />
                    </>
                  )
                  : null
                }
              </Grid>
            </Grid>
            <Grid item style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <Button type="submit" style={{ backgroundColor: 'goldenrod', width: '100px' }}>Submit</Button>
            </Grid>
          </Grid>
        </form>
        <hr style={{ width: '80vw' }}></hr>
      </div>
    </Page>
  )
}
