import React, { useState } from 'react'
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import AddressModal from './AddressModal';
import API from '../utils/API';
import CloseIcon from '@material-ui/icons/Close';
import store from '../utils/store'

const useStyles = makeStyles((theme) => ({
  mediaRoot: {
    maxWidth: 750,
  },
  mediaHeight: {
    height: 250
  },
}));

export default function CartContent() {
  const classes = useStyles();
  const cart = useSelector(state => state.cartReducer.cartProducts)
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

  return (
    <div style={{ width: '60vw', minHeight: '50vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left' }}>Shopping Cart</Typography>
        <div>
          <Typography variant="h6" style={{ color: 'red' }}>We ship internationally!</Typography>
          <AddressModal onSubmit={handleAddressSubmit} onChange={handleAddressChange} name={address.name} street={address.street1} city={address.city} state={address.state} zip={address.zip} country={address.country} />
        </div>
      </div>
      <hr></hr>
      {renderCart.length === 0 ?
        <div style={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant='h3'>Your cart is empty!</Typography>
        </div>
        :
        <div style={{ minHeight: '10em' }}>
          {renderCart?.map((item) => (
            <CartCard key={item.SKU} title={item.name} classes={classes} sku={item.SKU} price={item.price} shipping={item.rate ? `$${item.rate}` : 'n/a'} image={item.image} id={item._id} quantity={item.quantity}></CartCard>
          ))}
        </div>}
      <hr></hr>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" style={{ height: '3em', width: '25%' }} onClick={emptyCart}>
          <CloseIcon style={{ margin: '0 0.3em 0 -0.5em' }} />
          Empty Cart
        </Button>
        <div>
          <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
            Sub-Total:
          </Typography>
          <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
            ${subTotalPrice.toFixed(2)}
          </Typography>
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
        </div>
      </div>
      <div style={{display:'flex', width: '100%', justifyContent: 'flex-end', marginTop: '2rem'}}>
        <Button variant="contained" style={{backgroundColor:'goldenrod', fontSize: '1.1rem'}} elevation={2}>Submit Request for Quote</Button>
      </div>
    </div>
  )
}