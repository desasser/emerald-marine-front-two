const initialState = {
    productSpecs: []
}

const productSpecsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EDIT_SPECS': 
            return {
                productSpecs: action.payload
            }
        default: 
            return state;
    }
}

export default productSpecsReducer;