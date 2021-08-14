import React, { useState } from 'react'
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import AddressModal from './AddressModal';
import API from '../utils/API';
import CloseIcon from '@material-ui/icons/Close';
import store from '../utils/store';
import SmallCartCard from './SmallCartCard';
import { useHistory, Link  } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  mediaRoot: {
    maxWidth: 750,
  },
  mediaHeight: {
    height: 250
  },
  buttonStyle: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: '1.1rem'
  }
}));

export default function CartContent() {
  const classes = useStyles();
  const cart = useSelector(state => state.cartReducer.cartProducts)
  const history = useHistory();
  const [address, setAddress] = useState({
    name: '',
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })
  const [shippingRateState, setShippingRateState] = useState([])
  const [rateReady, setRateReady] = useState(false)

  let subTotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    subTotalPrice = parseFloat(cart[i].product.price) * parseFloat(cart[i].quantity.quantity) + subTotalPrice;
  }

  const handleAddressChange = e => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value
    });
  }

  const handleAddressSubmit = e => {
    e.preventDefault();
    setShippingRateState([])

    let promises = [];
    let shippingRates = [];
    for (let j = 0; j < cart.length; j++) {
      //Create a new object for each unique item in the cart
      //Add the item dimensions to the destination address object
      const shippingObj = {
        ...address,
        weight: cart[j].product.weight.split(' ')[0],
        length: cart[j].product.length,
        height: cart[j].product.height,
        width: cart[j].product.width,
      }

      //Call the API with the new object
      promises.push(
        API.getShippingRate(shippingObj).then(res => {
          shippingRates.push(res.data.rates[0].amount)
          setRateReady(true);
        }).catch(err => {
          console.log(err.message)
        })
      )
    }

    Promise.all(promises).then(() => setShippingRateState(shippingRates))
    setAddress({
      name: '',
      street1: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    })
  }

  // cart is an array of products and quantities
  // need to add the shipping rate to each item in the array
  const renderCart = cart.map((item, index) => {
    let addShipping = {};
    {
      rateReady ?
        addShipping = {
          ...item.product,
          ...item.quantity,
          rate: shippingRateState[index]
        } :
        addShipping = {
          ...item.product,
          ...item.quantity,
        }
    }
    return addShipping;
  });

  let totalShippingPrice = 0;

  if (rateReady) {
    for (let i = 0; i < renderCart.length; i++) {
      if (renderCart[i].rate) {
        totalShippingPrice = parseFloat(renderCart[i].rate) * parseFloat(renderCart[i].quantity) + totalShippingPrice;
      }
    }
  }

  let totalPrice = subTotalPrice + totalShippingPrice;

  const emptyCart = () => {
    cart.splice(0, cart.length)
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS',
      payload: cart.slice()
    })
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const handleClick = e => {
    e.preventDefault();
    history.push('/thank')
  }

  return (
    <Grid container style={{ width: '80%', marginBottom: '1rem' }} spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left' }}>Shopping Cart</Typography>
      </Grid>
      <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Link to='/products' style={{ cursor: 'pointer' }}>
          <Typography variant="h5" style={{ fontSize: '1.8rem'}}>
            Continue Shopping
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <hr></hr>
      </Grid>
      {renderCart.length === 0 ?
        <Grid item xs={12} style={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant='h3'>Your cart is empty!</Typography>
        </Grid>
        :
        <Grid item xs={12} style={{ minHeight: '10em' }}>
          {renderCart?.map((item) => (
            (isMobile ?
              <SmallCartCard key={item.SKU} title={item.name} classes={classes} sku={item.SKU} price={item.price} shipping={item.rate ? `$${item.rate}` : 'n/a'} image={item.image} id={item._id} quantity={item.quantity}></SmallCartCard>
              :
              <CartCard key={item.SKU} title={item.name} classes={classes} sku={item.SKU} price={item.price} shipping={item.rate ? `$${item.rate}` : 'n/a'} image={item.image} id={item._id} quantity={item.quantity}></CartCard>
            )
          ))}
        </Grid>}
      <Grid item xs={12}>
        <hr></hr>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="outlined" style={{ height: '3em', width: '15em' }} onClick={emptyCart}>
          <CloseIcon style={{ margin: '0 0.3em 0 -0.5em' }} />
          Empty Cart
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
          Sub-Total:
        </Typography>
        <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
          ${subTotalPrice.toFixed(2)}
        </Typography>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <AddressModal onSubmit={handleAddressSubmit} onChange={handleAddressChange} name={address.name} street={address.street1} city={address.city} state={address.state} zip={address.zip} country={address.country} />
        </Grid>
        <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
          Shipping Estimate Total:
        </Typography>
        <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
          ${totalShippingPrice.toFixed(2)}
        </Typography>
        <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
          Total Cost:
        </Typography>
        <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
          ${totalPrice.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <Button variant="contained" className={classes.buttonStyle} onClick={handleClick} >Submit Request for Quote</Button>
      </Grid>
    </Grid>
  )
}