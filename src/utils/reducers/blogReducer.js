const initialState = {
    blog: []
}

const blogReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_BLOG_POSTS':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default blogReducer;