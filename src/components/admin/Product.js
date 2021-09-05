import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard';
import ProgressIndicator from './ProgressIndicator';
import DeleteConfirmation from './DeleteConfirmation';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import { fetchProducts } from '../../utils/actions/productActions';

const useStyles = makeStyles((theme) => ({
  mediaHeight: {
    height: 200
  },
  mediaRoot: {
    marginBottom: '5px',
    height: '200px',
  },
  infoCards: {
    maxHeight: '75vh',
    overflowY: 'scroll',
  }
}));

const Product = () => {
  const token = localStorage.getItem('token');
  const products = useSelector(state => state.products.products)
  const productSpecs = useSelector(state => state.productSpecs.productSpecs)
  const classes = useStyles();

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
    height: '',
    details: ''
  });
  const [currentID, setCurrentID] = useState('')
  const [editing, setEditing] = useState(false)
  const [updating, setUpdating] = useState(false);
  const [indicator, setIndicator] = useState({
    open: false,
    severity: '',
    message: ''
  });
  const [confirmation, setConfirmation] = useState(false)

  const handleIndicatorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIndicator({
      ...indicator, open: false
    });
  };

  const handleConfirmationClose = () => {
    setConfirmation(false);
  }
  const handleConfirmationOpen = e => {
    setConfirmation(true);
    setCurrentID(e.currentTarget.getAttribute('data-id'))
  }

  const warnings = 'Please enter tags and categories as comma-seperated lists.'
  const fields = [{ name: 'name', content: `${current.name}` }, { name: 'description', content: `${current.description}` }, { name: 'price', content: `${current.price}` }, { name: 'SKU', content: `${current.SKU}` }, { name: 'tags', content: `${current.tags}` }, { name: 'categories', content: `${current.categories}` }, { name: 'video', content: `${current.video}` }, { name: 'image', content: `${current.image}` }, { name: 'alt', content: `${current.alt}` }, { name: 'weight', content: `${current.weight}` }, { name: 'length', content: `${current.length}` }, { name: 'width', content: `${current.width}` }, { name: 'height', content: `${current.height}` }]

  const handleAddFormChange = e => {
    const { name, value } = e.target;
    setCurrent({
      ...current,
      [name]: value
    });
  }

  const clearCurrent = () => {
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
  }

  const showEditForm = () => {
    setEditing(true)
  }

  const hideEditForm = () => {
    setEditing(false)
  }

  const addProduct = () => {
    setUpdating(false);
    const currentProduct = { ...current, details: JSON.stringify(productSpecs) }
    API.createProduct(currentProduct, token).then(res => {
      if (res.data) {
        store.dispatch(fetchProducts());
      }
      clearCurrent();
      hideEditForm();
      setIndicator({
        open: true,
        severity: 'success',
        message: 'Successfully added product.'
      });
    }).catch(err => {
      setIndicator({
        open: true,
        severity: 'error',
        message: `Error adding product: ${err.message}`
      });
    });
    store.dispatch({
      type: 'EDIT_SPECS',
      payload: []
    })
  }

  const grabCurrent = e => {
    setUpdating(true);
    e.preventDefault();
    const name = e.currentTarget.getAttribute('data-name')
    const description = e.currentTarget.getAttribute('data-description')
    const price = e.currentTarget.getAttribute('data-price')
    const sku = e.currentTarget.getAttribute('data-sku')
    const tags = e.currentTarget.getAttribute('data-tags')
    const categories = e.currentTarget.getAttribute('data-categories')
    const video = e.currentTarget.getAttribute('data-video')
    const image = e.currentTarget.getAttribute('data-image')
    const alt = e.currentTarget.getAttribute('data-alt')
    const weight = e.currentTarget.getAttribute('data-weight')
    const height = e.currentTarget.getAttribute('data-height')
    const length = e.currentTarget.getAttribute('data-length')
    const width = e.currentTarget.getAttribute('data-width')
    const id = e.currentTarget.getAttribute('data-id')
    const details = JSON.parse(e.currentTarget.getAttribute('data-details'))

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
      image: image,
      details: details
    });
    store.dispatch({
      type: 'EDIT_SPECS',
      payload: [...details]
    })
    setCurrentID(id)
    showEditForm();
  }

  const updateCurrent = e => {
    e.preventDefault();
    const currentProduct = { ...current, details: JSON.stringify(productSpecs) }
    API.updateProduct(currentID, currentProduct, token).then(res => {
      if (res) {
        store.dispatch(fetchProducts());
      }
      clearCurrent();
      hideEditForm();
      setUpdating(false);
      setIndicator({
        open: true,
        severity: 'success',
        message: 'Successfully updated product.'
      });
    }).catch(err => {
      if (err) {
        setIndicator({
          open: true,
          severity: 'error',
          message: `Error updating product: ${err.message}`
        });
      }
    });
  }

  const removeCurrent = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('data-id')
    API.deleteProduct(id, token).then(res => {
      if (res) {
        store.dispatch(fetchProducts());
        setIndicator({
          open: true,
          severity: 'success',
          message: 'Successfully deleted product.'
        });
      }
    }).catch(err => {
      if (err) {
        setIndicator({
          open: true,
          severity: 'error',
          message: `Error deleting product: ${err.message}`
        });
      }
    });
  }

  const uploadSuccess = result => {
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
    setIndicator({
      open: true,
      severity: 'error',
      message: `Error uploading image: ${response}`
    });
  }

  const saveCurrentProduct = e => {
    e.preventDefault();
    setUpdating(false)
    const savedProduct = JSON.stringify(current)
    localStorage.setItem('currentProduct', savedProduct)
    setIndicator({
      open: true,
      severity: 'success',
      message: 'Product successfully saved.'
    });
    hideEditForm();
  }

  const grabSavedProduct = e => {
    e.preventDefault();
    setUpdating(true);
    const savedProduct = JSON.parse(localStorage.getItem('currentProduct'));
    store.dispatch({
      type: 'ADD_CONTENT',
      payload: [...savedProduct.details]
    });
    setCurrent({ ...savedProduct });
    showEditForm();
  }

  return (
    <Grid container spacing={3}>
      <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleIndicatorClose}></ProgressIndicator>
      <Grid item xs={12}>
        <h1>Current Products</h1>
        <br />
        {editing ?
          <Grid container justify='space-evenly' >
            <Grid item xs={12} sm={9}>
              <AddForm section='Product' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateCurrent : addProduct} successCallback={uploadSuccess} failureCallback={uploadFailure} show={editing} showForm={showEditForm} saveCurrent={saveCurrentProduct} grabSaved={grabSavedProduct} />
            </Grid>
          </Grid> :
          <Grid container spacing={4}>
            <Grid item xs={11} sm={10} className={classes.infoCards}>
              {products?.map(product =>
                <ProductCard view='admin' id={product._id} price={product.price} sku={product.SKU} name={product.name} image={product.image} alt={product.alt} classes={classes} description={product.description} tags={product.tags} categories={product.categories} video={product.video} weight={product.weight} details={product.details} height={product.height} length={product.length} width={product.width} grabMe={grabCurrent} removeMe={handleConfirmationOpen} confirm={removeCurrent} />

              )}
            </Grid>
            <Grid item xs={12} sm={2}>
              <AddForm section='Product' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addProduct} updateMe={updateCurrent} successCallback={uploadSuccess} failureCallback={uploadFailure} show={editing} showForm={showEditForm} saveCurrent={saveCurrentProduct} grabSaved={grabSavedProduct} />
            </Grid>
          </Grid>}
      </Grid>
    </Grid>
  )

}

export default Product;