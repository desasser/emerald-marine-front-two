import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard';
import API from '../../utils/API';
import store from '../../utils/store';

const useStyles = makeStyles((theme) => ({        
    mediaRoot: {
      width: 200
    },
    mediaHeight: {
      height: 170
    }
  }));


const Product = () => {
    const token = localStorage.getItem('token');
    const products = store.getState().products.products
    const classes=useStyles();

    
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Current Products</h1>
                    <br/>
                    {products.map(product => 
                        <ProductCard price={product.price} sku={product.SKU} title={product.name} image={product.image} alt={product.alt} classes={classes}/>)}
                </Grid>
            </Grid>
        </div>
        
    )
    
}

export default Product;