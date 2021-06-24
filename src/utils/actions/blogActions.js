import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchBlogSuccess = blog => ({
    type: 'FETCH_BLOG_SUCCESS',
    payload: blog
})

const fetchBlogFailure = err => ({
    type: 'FETCH_BLOG_FAILURE',
    payload: err.message
})

export const fetchBlog = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${URL_PREFIX}/blogposts`)
            dispatch(fetchBlogSuccess(res))
        }
        catch(err) {
            dispatch(fetchBlogFailure(err));
        }
    }
}