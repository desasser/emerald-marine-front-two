import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Button, Container, TextField, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
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
    border: '1px solid white',
  }
}))

function createData(name, dimension) {
  return { name, dimension };
}

export default function SingleProductContent({ sku }) {
  const classes = useStyles()
  const history = useHistory();
  const products = useSelector(state => state.products.products)
  const cart = useSelector(state => state.cartReducer.cartProducts)
  const toPurchase = useSelector(state => state.purchaseReducer.purchaseProducts)
  const [quantity, setQuantity] = useState({
    quantity: '1'
  })
  const [color, setColor] = useState('Green')

  const currentProduct = products?.find(p => p.SKU === sku);

  const rows = [
    createData('Length', `${currentProduct.length} in`),
    createData('Width', `${currentProduct.width} in`),
    createData('Height', `${currentProduct.height} in`),
    createData('Weight', `${currentProduct.weight}`),
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
    const productToCart = {
      product: currentProduct,
      quantity: quantity
    }
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS',
      payload: cart.concat(productToCart)
    })
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
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
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
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ textAlign: 'right', paddingRight: '2rem' }}>{row.dimension}</TableCell>

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
