import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ProductCard from '../ProductCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import { updateProducts } from "../../utils/helpers/updateStore";

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

    const [current, setCurrent] = useState({
        name: '',
        description: '',
        price: '',
        SKU: '',
        tags: '',
        categories: '',
        video: '',
        image: '',
        alt: '',
        weight: '',
        length: '',
        width: '',
        height: ''
    });

    const warnings = 'Please enter tags and categories as comma-seperated lists.'
    const fields = [{name: 'name', content: `${current.name}`}, {name: 'description', content: `${current.description}`}, {name: 'price', content: `${current.price}`}, {name: 'SKU', content: `${current.SKU}`}, {name: 'tags', content: `${current.tags}`}, {name: 'categories', content: `${current.categories}`}, {name: 'video', content: `${current.video}`}, {name: 'image', content: `${current.image}`}, {name: 'alt', content: `${current.alt}`}, {name: 'weight', content: `${current.weight}`}, {name: 'length', content: `${current.length}`}, {name: 'width', content: `${current.width}`}, {name: 'height', content: `${current.height}`}]

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }

    const addProduct = () => {
        API.createProduct(current, token).then(res => {
            if(res.data) {
                updateProducts();
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const removeMe = () => {
        console.log('removed')
    }

    const updateMe = () => {
        console.log('updated')
    }
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Current Products</h1>
                    <br/>
                    <Grid container spacing={5} justify='space-evenly'>
                    {products.map(product => 
                        <Grid item xs={4}>
                        <ProductCard price={product.price} sku={product.SKU} title={product.name} image={product.image} alt={product.alt} classes={classes}/>
                        <Button size="small" onClick={removeMe}>Delete Product</Button>
                         <Button size="small" onClick={updateMe}>Edit Product</Button>
                        </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='Products' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addProduct}/>
                </Grid>
            </Grid>
        </div>
        
    )
    
}

export default Product;