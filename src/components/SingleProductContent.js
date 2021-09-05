import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Button, TextField, Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube';
import store from '../utils/store';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ProductAccordian from '../components/ProductAccordian';

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
    backgroundColor: theme.palette.secondary.main,
    fontSize: '16px',
    margin: '0.5rem'
  },
  root: {
    borderRadius: '0.5rem',
    width: '100%',
    padding: '3rem',
    margin: '0 auto'
  },
  heading: {
    color: '#5d938a'
  },
  accordion: {
    background: 'LightGray',
  }
}))

function createData(name, dimensionImp, dimensionMet) {
  return { name, dimensionImp, dimensionMet };
}

export default function SingleProductContent({ sku }) {
  const classes = useStyles()
  const history = useHistory();
  const products = useSelector(state => state.products.products)
  const cart = useSelector(state => state.cartReducer.cartProducts)
  const [quantity, setQuantity] = useState({
    quantity: '1'
  })

  const currentProduct = products?.find(p => p.SKU === sku);

  const rows = [
    createData('Length', `${currentProduct.length} in`, `${currentProduct.length *2.54} cm`),
    createData('Width', `${currentProduct.width} in`, `${currentProduct.width *2.54} cm`),
    createData('Height', `${currentProduct.height} in`, `${currentProduct.height *2.54} cm`),
    createData('Weight', `${currentProduct.weight} lbs`, `${currentProduct.weight*0.454} kg`),
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setQuantity({
      ...quantity,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    let productToCart = {};

    if (cart.some(item => item.product.SKU === currentProduct.SKU)) {
      const cartItem = cart.find(item => item.product.SKU === currentProduct.SKU);
      const modifyIndex = cart.findIndex(item => item.product.SKU === currentProduct.SKU)
      productToCart = {
        product: currentProduct,
        quantity: {
          quantity: `${JSON.parse(quantity.quantity) + JSON.parse(cartItem.quantity.quantity)}`
        }
      }

      cart.splice(modifyIndex, 1)

      store.dispatch({
        type: 'FETCH_CART_PRODUCTS',
        payload: cart.concat(productToCart)
      })
    } else {
      productToCart = {
        product: currentProduct,
        quantity: quantity
      }
      store.dispatch({
        type: 'FETCH_CART_PRODUCTS',
        payload: cart.concat(productToCart)
      })
    }



    history.push('/cart')
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <Grid container style={{ width: '80%' }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant={isMobile ? 'h4' : 'h3'} style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left', marginBottom: '20px' }}>
          {currentProduct.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={currentProduct?.image} alt={currentProduct?.alt} style={{ display: 'inline-block', margin: '0 auto', maxWidth: '350px' }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="h5" component="span" style={{ marginBottom: '1.5rem', textAlign: 'right', fontWeight: '700' }}>
            ${currentProduct?.price.split('.')[0]}
          </Typography>
          <Typography variant="h5" component="span" style={{ marginBottom: '1.5rem', textAlign: 'right', fontSize: '1.1rem', fontWeight: '700' }}>
            {currentProduct?.price.split('.')[1]}
          </Typography>
        </div>
        <Typography style={{ width: '50%' }} component='span'>
          {currentProduct?.description}
        </Typography>
        <br></br>
        {currentProduct.video ?
          <ReactPlayer url={currentProduct?.video} width={'100%'} style={{ margin: '1.5em 0' }} />
          : null
        }
        <form style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
              <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='quantity' label='quantity' value={quantity.quantity} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" className={classes.buttonStyle} type='submit'>Add to Quote</Button>
            </div>
          </div>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ color: '#74b4ab' }}>
          Details
        </Typography>
        <ProductAccordian details={currentProduct.details} classes={classes} />
      </Grid>
      <Grid item xs={12} ></Grid>
      <Grid item xs={12} >
        <Typography variant="h3" component="span" style={{ color: '#74b4ab', marginBottom: '1rem' }}>Specifications</Typography>
        <TableContainer component={Paper} style={{ marginTop: '1em' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Spec</TableCell>
                <TableCell align="right">Imperial</TableCell>
                <TableCell align="right">Metric</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ textAlign: 'right', paddingRight: '2rem' }}>{row.dimensionImp}</TableCell>
                  <TableCell style={{ textAlign: 'right', paddingRight: '2rem' }}>{row.dimensionMet}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <form style={{ marginTop: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
            <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='quantity' label='quantity' value={quantity.quantity} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button variant="contained" className={classes.buttonStyle} type='submit'>Add to Quote</Button>
          </div>
        </div>
      </form>
    </Grid>
  )
}
