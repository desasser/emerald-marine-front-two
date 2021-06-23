import React from 'react'
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

  const renderCart = cart;

  return (
    <div style={{ width: '60vw' }}>
      <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left' }}>Shopping Cart</Typography>
      <hr></hr>
      {renderCart?.map((item) => (

        <CartCard title={item.product.name} classes={classes} sku={item.product.SKU} price={item.product.price} shipping='123.12' image={item.product.image} id={item.product._id} quantity={item.quantity.quantity}>
          This is a custom description for Product 4
        </CartCard>
      ))}
      <hr></hr>
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