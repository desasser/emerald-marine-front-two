import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import React from 'react'
import OscarProductCard from './OscarProductCard'

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  mediaRoot: {
    minWidth: 200,
    minHeight: 250,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  mediaHeight: {
    height: 200,
    width: 200,
  }
}));

export default function ProductBlock(props) {
  const classes = useStyles();
  const products = useSelector(state => state.products.products)

  const bestSellers = [
    {
      name:'OSCAR Water Rescue Training Dummy™ Now available for direct purchase!',
      SKU:'OT100'
    },
    {
      name:'OSCAR Water Rescue Training Dummy™ Now available for direct purchase!',
      SKU:'OT100'
    },
    {
      name:'Stowage Bag for OSCAR Water Rescue Training Dummy',
      SKU:'OA101'
    },
  ]

  const checkSKU = (product) => {
    if (product.name === bestSellers[0].name || product.name === bestSellers[1].name || product.name === bestSellers[2].name) {
      return true
    }
  }

  const filteredProducts = products.filter(checkSKU);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end', margin: '20px' }}>
        <Typography variant='h3' style={{ color: '#74b4ab' }}>
          Oscar Water Rescue Products
        </Typography>
        <div>
          <Typography variant="h6" style={{ color: 'red', textAlign: 'right' }}>We accept International Inquiries!</Typography>
          <Typography style={{ textAlign: 'right' }}>Get a shipping estimate in your cart.</Typography>
        </div>
      </div>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4} style={{}}>
            {filteredProducts?.map(product => (
              <Grid key={product._id} item style={{flex: '1', display: 'flex', alignItems: 'center'}}>
                <OscarProductCard name={product.name} classes={classes} sku={product.SKU} price={product.price} image={product.image} alt={product.alt}></OscarProductCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to='/products' style={{ textDecoration: 'none' }}>
          <Button style={{ marginTop: '20px' }} >View All Products</Button>
        </Link>
      </div>
    </div>
  )
}
