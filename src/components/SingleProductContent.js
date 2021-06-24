import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Typography, Grid, Button, Container, TextField } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube'
import store from '../utils/store'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  inputStyle: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: '0.5em',
    width: '12em',
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
    height: '56px', 
    width: '100%', 
    backgroundColor: 'goldenrod', 
    fontSize: '16px', 
  }
}))

export default function SingleProductContent({ sku }) {
  const classes = useStyles()
  const products = useSelector(state => state.products.products)
  const cart = useSelector(state => state.cartReducer.cartProducts)
  const [quantity, setQuantity] = useState({
    quantity: '1'
  })

  const currentProduct = products?.find(p => p.SKU === sku);

  // console.log('i am a shopping cart!', cart)
  // console.log('current product', currentProduct)

  const handleChange = e => {
    const { name, value } = e.target;
    setQuantity({
      ...quantity,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const productToCart = {
      product: currentProduct,
      quantity: quantity
    }
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS',
      payload: cart.concat(productToCart)
    })
  }

  return (
    <Grid container style={{ width: '80%' }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h3' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left', marginBottom: '20px' }}>
          {currentProduct.name}
          {/* {currentProduct?.name} */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={currentProduct?.image} alt={currentProduct?.alt} style={{ display: 'inline-block', margin: '0 auto', maxWidth: '350px' }} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" style={{ marginBottom: '1.5rem', textAlign: 'right' }}>
          ${currentProduct?.price}
        </Typography>
        <Typography style={{ width: '50%' }} component='span'>
          {currentProduct?.description}
        </Typography>
        <br></br>
        <ReactPlayer url={currentProduct?.video} width={'250px'} height={'150px'} style={{ margin: '1.5em 0' }} />
        <Typography variant="subtitle2">
          SKU: {sku}
        </Typography>
        <Typography variant="subtitle2">
          Categories: {currentProduct?.categories.join(', ')}
        </Typography>
        <Typography variant="subtitle2">
          Tags: {currentProduct?.tags.join(', ')}
        </Typography>
        <form style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }} onSubmit={handleSubmit}>
          <Typography>Quantity</Typography>
          <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='quantity' label='quantity' required/>
          <Button variant="contained" className={classes.buttonStyle} type='submit'>Add to Quote</Button>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ marginTop: '20px' }}>Details</Typography>
        <Container maxWidth='md' style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>

        </Container>
      </Grid>
      <Grid item xs={12} ></Grid>
      <Grid item xs={12} >
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <Typography variant="h5" component="span">Specifications</Typography>
          <Typography variant="subtitle2" component="span" style={{ alignSelf: 'flex-end' }}>Download Product Sheet</Typography>
        </div>
        <Container maxWidth='md' style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>

        </Container>
      </Grid>
    </Grid>
  )
}
