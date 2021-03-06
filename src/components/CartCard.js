import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, Button, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import store from '../utils/store'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minHeight: '225px'
  },
  img: {
    width: 128,
    // height: 128,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: 'goldenrod'
  }
}));

export default function CartCard({ price, shipping, image, title, sku, id, quantity }) {
  const classes = useStyles();
  const cart = useSelector(state => state.cartReducer.cartProducts)
  const [currentQuant, setCurrentQuant] = useState({
    quantity: quantity
  })

  const removeItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS',
      payload: cart.filter(cart => cart.product._id !== id)
    })
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setCurrentQuant({
      ...quantity,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // grab index of current product -- num
    const num = cart.findIndex(item => item.product._id === id)
    // set the quantity key of the object at index 'num' to currentQuant
    cart[num].quantity = currentQuant
    // load in the new array to redux
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS',
      payload: cart.slice()
    })
  }

  return (
    <Grid container style={{ display: 'flex' }}>
      <Grid item xs={12} sm={9} className={classes.root}>
        <Link to={`/product/${sku}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <img className={classes.img} alt={title} src={image} />
              </Grid>
              <Grid item xs={12} sm container style={{ minHeight: '200px' }}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs >
                    <Typography gutterBottom variant="h6" style={{ marginTop: '10px', color: '#74b4ab' }}>
                      {title}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" style={{ textAlign: 'right' }}>${price}</Typography>
                  <Typography variant="subtitle1" style={{ textAlign: 'right' }}>Quantity: {quantity}</Typography>
                  <Typography variant="subtitle1">Shipping Estimate: {shipping}</Typography>
                  <Button onClick={removeItem} id={id} variant='outlined'>
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={2} style={{display: 'flex', alignItems: 'center'}}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='quantity' label='quantity' value={currentQuant.quantity} />
          <Button variant="contained" className={classes.buttonStyle} type='submit'>Update</Button>
        </form>
      </Grid>
    </Grid>
  );
}