import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchProductsSuccess = products => ({
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: products
})

const fetchProductsFailure = err => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: err.message
})

export const fetchProducts = () => {
    return async dispatch => {
        try {
            let res= await axios.get(`${URL_PREFIX}/products`)
            dispatch(fetchProductsSuccess(res))
        }
        catch(err) {
            // dispatch(fetchProductsFailure(err));
            console.log(err)
        }
    }
}