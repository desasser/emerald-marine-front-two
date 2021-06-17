import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
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
    const dispatch=useDispatch()

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
    const [currentID, setCurrentID] = useState('')

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
            dispatch(updateProducts())
            setCurrent({
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
                })  
        }).catch(err => {
            console.log(err.message);
            setCurrent({
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
        });
    }

    const grabCurrent = e => {
        e.preventDefault();
        const name = e.currentTarget.getAttribute('data-name')
        const description = e.currentTarget.getAttribute('data-description')
        const price=e.currentTarget.getAttribute('data-price')
        const sku=e.currentTarget.getAttribute('data-sku')
        const tags = e.currentTarget.getAttribute('data-tags')
        const categories=e.currentTarget.getAttribute('data-categories')
        const video=e.currentTarget.getAttribute('data-video')
        const image=e.currentTarget.getAttribute('data-image')
        const alt=e.currentTarget.getAttribute('data-alt')
        const weight = e.currentTarget.getAttribute('data-weight')
        const height = e.currentTarget.getAttribute('data-height')
        const length = e.currentTarget.getAttribute('data-length')
        const width = e.currentTarget.getAttribute('data-width')
        const id = e.currentTarget.getAttribute('data-id')

        const attr = [name, description, price, sku, tags, categories, video, image, alt, weight, height, length, width]
        setCurrent({
            name: name,
            description: description,
            price: price,
            SKU: sku,
            tags: tags,
            categories: categories,
            video: video,
            alt: alt,
            weight: weight,
            height: height,
            width: width,
            length: length,
            image: image
        });
        setCurrentID(id)
    }

    const updateCurrent = e => {
        e.preventDefault();
        API.updateProduct(currentID, current, token).then(res => {
            dispatch(updateProducts())
                setCurrent({
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
                })
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
            setCurrent({
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
            })
        });
    }

    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id');
        API.deleteProduct(id, token).then(res => {
            dispatch(updateProducts())
            setCurrent({
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
            })
        }).catch(err => {
            setCurrent({
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
            })
        });
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
                        <ProductCard view='admin' id={product._id} price={product.price} sku={product.SKU} name={product.name} image={product.image} alt={product.alt} classes={classes} description={product.description} tags={product.tags} categories={product.categories} video={product.video} weight={product.weight} height={product.height} length={product.length} width={product.width} grabMe={grabCurrent} removeMe={removeCurrent}/>
                        </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='Products' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addProduct} updateMe={updateCurrent}/>
                </Grid>
            </Grid>
        </div>
        
    )
    
}

export default Product;