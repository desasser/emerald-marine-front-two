const initialState = {
  purchaseProducts: [],
}

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PURCHASE_PRODUCTS':
      return {
        purchaseProducts: action.payload,
      }
    default:
      return state
  }
}

export default purchaseReducer;