const initialState = {
    blogContent: []
}

const blogContentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CONTENT': 
            return {
                blogContent: action.payload
            }
        default: 
            return state;
    }
}

export default blogContentReducer;