
const initialState = {
    loading: false,
    success: false,
    blog: [],
    error: ''
}

const blogReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_BLOG':
            return {
                loading: true,
                success: false,
                blog: [],
                error: ''
            }
        case 'FETCH_BLOG_SUCCESS':
            return {
                loading: false,
                success: true,
                blog: action.payload.blog,
                error: ''
            }
        case 'FETCH_BLOG_FAILURE':
            return {
                loading: false,
                success: false,
                blog: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default blogReducer;