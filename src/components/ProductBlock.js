import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import React from 'react'
import ProductCard from './ProductCard'

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
  },
  blockWrapper: {
    margin: 20,
  },
  control: {
    padding: theme.spacing(2),
  },
  mediaRoot: {
    width: 200
  },
  mediaHeight: {
    height: 170
  }
}));

export default function ProductBlock(props) {
  const classes = useStyles();
  const products = useSelector(state => state.products.products)

  return (
    <Container className={classes.blockWrapper}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%', alignItems: 'flex-end', margin: '20px'}}>
        <Typography variant='h3' style={{ color: '#74b4ab' }}>
          Our Best Sellers
        </Typography>
        <div>
        <Typography variant="h6" style={{ color: 'red', textAlign: 'right' }}>We accept International Inquiries!</Typography>
        <Typography style={{textAlign: 'right'}}>Get a shipping estimate in your cart.</Typography>
        </div>
      </div>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            {products.slice(0, 4)?.map(product => (
              <Grid key={product._id} item>
                <ProductCard name={product.name} classes={classes} sku={product.SKU} price={product.price} image={product.image} alt={product.alt}></ProductCard>
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
    </Container>
  )
}
