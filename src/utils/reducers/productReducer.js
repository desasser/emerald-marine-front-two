const initialState = {
    loading: false,
    success: false,
    products: [],
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {
                loading: true,
                success: false,
                products: [],
                error: ''
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                loading: false,
                success: true,
                products: action.payload.data,
                error: ''
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                loading: false,
                success: false,
                products: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default productReducer;