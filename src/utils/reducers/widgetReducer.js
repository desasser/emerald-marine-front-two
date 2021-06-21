const initialState = {
    url: ''
}

const widgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_IMAGE_URL':
            return {
                url: action.payload
            }
        case 'CLEAR_IMAGE_URL':
            return {
                url: ''
            }
        default: 
            return state
    }
}

export default widgetReducer;