import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Typography, Grid, Button, Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube'
import store from '../utils/store'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

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

  const handleSelectChange = e => {
    setColor(e.target.value)
  }

  const handlePurchase = e => {
    e.preventDefault();
    console.log(color)
    if (color === 'Orange' || color === 'Green') {
      const directPurchase = {
        product: currentProduct,
        quantity: quantity,
        color: color
      }
      store.dispatch({
        type: 'FETCH_PURCHASE_PRODUCTS',
        payload: toPurchase.concat(directPurchase)
      })
      history.push('/purchase')
    }
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <Grid container style={{ width: '80%' }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant={isMobile ? 'h4' : 'h3'} style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left', marginBottom: '20px' }}>
          {currentProduct.name}
          {/* {currentProduct?.name} */}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={currentProduct?.image} alt={currentProduct?.alt} style={{ display: 'inline-block', margin: '0 auto', maxWidth: '350px' }} />
      </Grid>
      <Grid item xs={12} sm={6}>
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
              <TextField className={classes.inputStyle} id="outlined-basic" variant="outlined" onChange={handleChange} name='quantity' label='quantity' value={quantity.quantity} required />
              {currentProduct.SKU === 'OT100' ?
                <FormControl required style={{ width: '80%', marginTop: '1rem', marginLeft: '1rem' }}>
                  <InputLabel id="color-selection-label">Select Color</InputLabel>
                  <Select
                    labelId="select-label-color"
                    id="color-select"
                    value={color}
                    onChange={handleSelectChange}
                    required
                  >
                    <MenuItem value='Green'>Green</MenuItem>
                    <MenuItem value='Orange'>Orange</MenuItem>
                  </Select>
                </FormControl> : null
              }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" className={classes.buttonStyle} type='submit'>Add to Quote</Button>
              {currentProduct.SKU === 'OT100' ?
                <Button variant="contained" className={classes.buttonStyle} onClick={handlePurchase}>Purchase Now</Button>
                : null
              }
            </div>
          </div>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ color: '#74b4ab', marginBottom: '1rem' }}>Details</Typography>
        <Container maxWidth='md' style={{ backgroundColor: 'LightGray', borderRadius: '0.5rem' }}>
          {JSON.parse(currentProduct.details).map(text =>
            <div style={{ padding: '1rem 0' }}>
              <Typography variant='h4' style={{ color: '#74b4ab' }}>
                {text.heading}
              </Typography>
              <br></br>
              <Typography variant="body1" style={{ marginBottom: '1.5em' }}>
                {text.content}
              </Typography>
            </div>
          )}
        </Container>
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
              {currentProduct.SKU === 'OT100' ?
                <FormControl required style={{ width: '80%', marginTop: '1rem', marginLeft: '1rem' }}>
                  <InputLabel id="color-selection-label">Select Color</InputLabel>
                  <Select
                    labelId="select-label-color"
                    id="color-select"
                    value={color}
                    onChange={handleSelectChange}
                    required
                  >
                    <MenuItem value='Green'>Green</MenuItem>
                    <MenuItem value='Orange'>Orange</MenuItem>
                  </Select>
                </FormControl> : null
              }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" className={classes.buttonStyle} type='submit'>Add to Quote</Button>
              {currentProduct.SKU === 'OT100' ?
                <Button variant="contained" className={classes.buttonStyle} onClick={handlePurchase}>Purchase Now</Button>
                : null
              }
            </div>
          </div>
        </form>
    </Grid>
  )
}
