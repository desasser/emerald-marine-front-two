import React, {useState} from "react";
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import {fetchProducts} from '../../utils/actions/productActions';

const useStyles = makeStyles((theme) => ({        
    mediaHeight: {
      height: 200
    }
  }));


const Product = () => {
    const token = localStorage.getItem('token');
    const products = useSelector(state => state.products.products)
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
            if(res.data) {
                store.dispatch(fetchProducts());
            }
        }).catch(err => {
            console.log(err.message)
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
            if(res) {
                store.dispatch(fetchProducts());
            }
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
        });
    }

    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id');
        API.deleteProduct(id, token).then(res => {
            if(res) {
                store.dispatch(fetchProducts());
            }
        }).catch(err => {
            if(err) {
                console.log(err)
            }
        });
    }

    const uploadSuccess = result => {
        console.log(result.info.url)
        store.dispatch({
            type: 'FETCH_IMAGE_URL',
            payload: {
                url: result.info.url
            }
        });
        setCurrent({
            ...current,
            image: result.info.url
        });
    }

    const uploadFailure = response => {
        console.log(response)
    }
    
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Current Products</h1>
                    <br/>
                    <Grid container spacing={5} justify='space-evenly'>
                        <Grid item xs={4} style={{'overflow': 'scroll'}}>
                    {products?.map(product => 
                        <ProductCard view='admin' id={product._id} price={product.price} sku={product.SKU} name={product.name} image={product.image} alt={product.alt} classes={classes} description={product.description} tags={product.tags} categories={product.categories} video={product.video} weight={product.weight} height={product.height} length={product.length} width={product.width} grabMe={grabCurrent} removeMe={removeCurrent} classes={classes}/>
                        )}
                        </Grid>
                        <Grid item xs={6}>
                    <AddForm section='Products' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addProduct} updateMe={updateCurrent} successCallback={uploadSuccess} failureCallback={uploadFailure}/>
                </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>
        
    )
    
}

export default Product;