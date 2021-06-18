import React from 'react'
import {useSelector} from 'react-redux';
import { Typography, Grid, Button, Container } from '@material-ui/core';
import store from '../utils/store';
import ReactPlayer from 'react-player/youtube'

export default function SingleProductContent({ sku }) {
  const products = useSelector(state => state.products.products)

  console.log('i am products', products)
  console.log('single content sku', sku)

  const currentProduct = products?.find(p => p.SKU === sku);
  console.log('i am the target product', currentProduct)
// 
  return (
    <Grid container style={{ width: '80%' }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h3' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'left', marginBottom: '20px' }}>
          {/* {currentProduct?.name} */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={currentProduct?.image} alt={currentProduct?.alt} style={{ display: 'inline-block', margin: '0 auto' }} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" style={{ marginBottom: '1.5rem', textAlign: 'right' }}>
          ${currentProduct?.price}
        </Typography>
        <Typography style={{ width: '50%' }} component='span'>
          {currentProduct?.description}
        </Typography>
        <br></br>
        <ReactPlayer url={currentProduct?.video} width={'250px'} height={'150px'} style={{margin: '1.5em 0'}}/>
        <Typography variant="subtitle2">
          SKU: {sku}
        </Typography>
        <Typography variant="subtitle2">
          Categories: {currentProduct?.categories.join(', ')}
        </Typography>
        <Typography variant="subtitle2">
          Tags: {currentProduct?.tags.join(', ')}
        </Typography>
        <Button variant="contained" style={{ height: '56px', width: '100%', backgroundColor: '#f5ed5eff', fontSize: '16px', marginTop: '1.5em' }}>Add to Request for Quote</Button>
      </Grid>
      {/* <Grid item xs={7}></Grid>
      <Grid item xs={3}>
        
      </Grid>
      <Grid item xs={2}></Grid> */}
      
      <Grid item xs={12}>
        <Typography variant="h5" style={{marginTop: '20px'}}>Details</Typography>
        <Container maxWidth='md' style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>

        </Container>
      </Grid>
      <Grid item xs={12} ></Grid>
      <Grid item xs={12} >
        <div style={{ display: 'inline-block', display: 'flex', justifyContent: "space-between" }}>
          <Typography variant="h5" component="span">Specifications</Typography>
          <Typography variant="subtitle2" component="span" style={{ alignSelf: 'flex-end' }}>Download Product Sheet</Typography>
        </div>
        <Container maxWidth='md' style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>

        </Container>
      </Grid>
    </Grid>
  )
}
