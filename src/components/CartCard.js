import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import {useSelector} from 'react-redux';
import store from '../utils/store'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
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
}));

export default function CartCard({ children, price, shipping, image, sku, title, id }) {
  const classes = useStyles();
  const cart = useSelector(state => state.cartReducer.cartProducts)

  const removeItem = () => {
    store.dispatch({
      type: 'FETCH_CART_PRODUCTS', 
      payload: cart.filter(cart => cart._id !== id)
    })
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.img} alt="complex" src={image} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs >
                <Typography gutterBottom variant="h6" style={{ marginTop: '10px', color: '#74b4ab' }}>
                  {title}
                </Typography>
                {/* <Typography variant="body2" style={{width: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block'}} gutterBottom>
                  {children}
                </Typography> */}
              </Grid>
              {/* <Grid item>
                <Typography variant="body2" color="textSecondary">
                  SKU: {sku}
                </Typography>
              </Grid> */}
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" style={{ textAlign: 'right' }}>${price}</Typography>
              <Typography variant="subtitle1">Shipping Estimate: ${shipping}</Typography>
              <Button onClick={removeItem} id={id}>
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}