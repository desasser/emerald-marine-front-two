import React, { useState } from 'react'
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import AddressModal from './AddressModal';

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
  // 

  const renderCart = cart;

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice = parseFloat(cart[i].product.price) * parseFloat(cart[i].quantity.quantity) + totalPrice;
  }

  const handleAddressSubmit = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value
    });
    console.log('submit address', address)
  }

  const handleAddressChange = e => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value
    });
    console.log('change address')
  }

  return (
    <div style={{ width: '60vw', minHeight: '50vh' }}>
      <div style={{ display: 'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left' }}>Shopping Cart</Typography>
        <div>
          <Typography variant="h6" style={{ color: 'red' }}>We ship internationally!</Typography>
          <AddressModal onSubmit={handleAddressSubmit} onChange={handleAddressChange}/>
        </div>
      </div>
      <hr></hr>
      {renderCart?.map((item) => (
        <CartCard title={item.product.name} classes={classes} sku={item.product.SKU} price={item.product.price} shipping='123.12' image={item.product.image} id={item.product._id} quantity={item.quantity.quantity}>
          This is a custom description for Product 4
        </CartCard>
      ))}
      <hr></hr>
      <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
        Sub-Total:
      </Typography>
      <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
        ${totalPrice.toFixed(2)}
      </Typography>
      <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
        Shipping Estimate Total:
      </Typography>
      <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
        $XXXX.XX
      </Typography>
      <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
        Total Cost:
      </Typography>
      <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
        $XXXX.XX
      </Typography>
    </div>
  )
}