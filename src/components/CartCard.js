import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import store from '../utils/store'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: '70%',
    margin: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    height: '225px'
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

export default function CartCard({ price, shipping, image, title, id, quantity }) {
  const classes = useStyles();
  const cart = useSelector(state => state.cartReducer.cartProducts)
  // const [quantity, setQuantity] = useState({
  //   quantity: quantity
  // })
  console.log('cart')
  console.log('==========================================')
  console.log(cart)

  const removeItem = () => {
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS',
      payload: cart.filter(cart => cart.product._id !== id)
    })
  }

  const handleChange = e => {
    // const { name, value } = e.target;
    // setQuantity({
    //   ...quantity,
    //   [name]: value
    // });
    console.log('change')
  }

  const handleSubmit = e => {
    e.preventDefault();
    // const productToCart = {
    //   product: currentProduct,
    //   quantity: quantity
    // }
    // store.dispatch({
    //   type: 'FETCH_CART_PRODUCTS',
    //   payload: cart.concat(productToCart)
    // })
    console.log('submit')
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <img className={classes.img} alt="complex" src={image} />
            </Grid>
            <Grid item xs={12} sm container style={{ height: '200px' }}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                  <Typography gutterBottom variant="h6" style={{ marginTop: '10px', color: '#74b4ab' }}>
                    {title}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" style={{ textAlign: 'right' }}>${price}</Typography>
                <Typography variant="subtitle1" style={{ textAlign: 'right' }}>Quantity: {quantity}</Typography>
                <Typography variant="subtitle1">Shipping Estimate: ${shipping}</Typography>
                <Button onClick={removeItem} id={id} variant='outlined'>
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography>Quantity</Typography>
        <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='quantity' label='quantity' />
        <Button variant="contained" className={classes.buttonStyle} type='submit'>Update</Button>
      </form>
    </div>
  );
}