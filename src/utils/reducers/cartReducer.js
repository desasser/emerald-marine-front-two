const initialState = {
  cartProducts: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CART_PRODUCTS':
      return {
        cartProducts: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer;