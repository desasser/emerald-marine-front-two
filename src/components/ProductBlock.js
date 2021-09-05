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

  const bestSellers = [
    {
      name:'ALERT2 Man-Overboard Receiver™',
      SKU:'AR100',
      order: 0,
    },
    {
      name:'ALERT2 Man-Overboard Transmitter™ with Spray Tight Pouch',
      SKU:'AT102',
      order: 1,
    },
    {
      name:'ALERT Portable, DIY Man-Overboard Alarm System',
      SKU:'AS100',
      order: 2,
    },
    {
      name:'OSCAR Water Rescue Training Dummy™ Now available for direct purchase!',
      SKU:'OT100',
      order: 3,
    },
  ]

  const checkSKU = (product) => {
    if (product.SKU === bestSellers[0].SKU || product.SKU === bestSellers[1].SKU || product.SKU === bestSellers[2].SKU || product.SKU === bestSellers[3].SKU) {
      return true
    }
  }

  const sortOrder = ['AR100', 'AT102', 'AS100', 'OT100']

  const itemArranger = products.filter(checkSKU);
  const filteredProducts = [];
  for (let i = 0; i < itemArranger.length; i++) {
    filteredProducts.push(itemArranger.find(x => x.SKU === sortOrder[i]))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end', margin: '20px' }}>
        <Typography variant='h3' style={{ color: '#74b4ab' }}>
          Our Best Sellers
        </Typography>
        <div>
          <Typography variant="h6" style={{ color: 'red', textAlign: 'right' }}>We accept International Inquiries!</Typography>
          <Typography style={{ textAlign: 'right' }}>Get a shipping estimate in your cart.</Typography>
        </div>
      </div>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            {filteredProducts?.map(product => (
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
    </div>
  )
}
