import { Container, Typography, Button, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import ProductCard from './ProductCard'

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
    // backgroundColor: 'salmon',
    // height: 200,
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

  return (
    <Container className={classes.blockWrapper}>
      <Typography variant='h3' style={{ margin: '20px' }}>
        Our Best Sellers
      </Typography>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            <Grid item>
              <ProductCard classes={classes} title='Product 1' sku='1111' price='99.99'></ProductCard>
            </Grid>
            <Grid item>
              <ProductCard classes={classes} title='Product 2' sku='2222' price='99.99'></ProductCard>
            </Grid>
            <Grid item>
              <ProductCard classes={classes} title='Product 3' sku='3333' price='99.99'></ProductCard>
            </Grid>
            <Grid item>
              <ProductCard classes={classes} title='Product 4' sku='4444' price='99.99'></ProductCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to='/products' style={{textDecoration: 'none'}}>
          <Button style={{ marginTop: '20px' }} >View All Products</Button>
        </Link>
      </div>
    </Container>
  )
}
