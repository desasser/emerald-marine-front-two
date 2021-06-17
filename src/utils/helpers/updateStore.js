import API from '../../utils/API';
import store from '../../utils/store';

const token = localStorage.getItem('token');

export const updateMailingList = () => {
    return function thunk(dispatch) {
        dispatch({type: 'FETCH_MAILING_LIST'});
        API.getMailingList(token).then(res => {
            dispatch({
              type: 'FETCH_MAILING_LIST_SUCCESS',
              payload: res.data
            });
          }).catch(err => {
              dispatch({
                  type: 'FETCH_MAILING_LIST_FAILURE',
                  payload: err.message
              });
            const errorCode = err.message.split(' ')[5]
            if(errorCode===401) {
                localStorage.removeItem('token');
            } else {
                console.log(err.message)
            }
            });
    } 
}

export const updateTestList = () => {
    return function thunk(dispatch) {
        dispatch({type: 'FETCH_TEST_LIST'});
        API.getTestList(token).then(res => {
            dispatch({
              type: 'FETCH_TEST_LIST_SUCCESS',
              payload: res.data
            });
          }).catch(err => {
              dispatch({
                  type: 'FETCH_TEST_LIST_FAILURE',
                  payload: err.message
              });
            const errorCode = err.message.split(' ')[5]
            if(errorCode===401) {
                localStorage.removeItem('token');
            } else {
                console.log(err.message)
            }
            });
    } 
}

export const updateProducts = () => {
    return function thunk(dispatch) {
        dispatch({type: 'FETCH_PRODUCTS'});
        API.getAllProducts().then(res => {
            dispatch({
              type: 'FETCH_PRODUCTS_SUCCESS',
              payload: res.data
            });
          }).catch(err => {
              dispatch({
                  type: 'FETCH_PRODUCTS_FAILURE',
                  payload: err.message
              });
            const errorCode = err.message.split(' ')[5]
            if(errorCode===401) {
                localStorage.removeItem('token');
            } else {
                console.log(err.message)
            }
            });
    }   
}


export const updateBlogPosts = () => {
    return function thunk(dispatch) {
        dispatch({type: 'FETCH_BLOG'});
        API.getAllBlogPosts().then(res => {
            dispatch({
              type: 'FETCH_BLOG_SUCCESS',
              payload: res.data
            });
          }).catch(err => {
              dispatch({
                  type: 'FETCH_BLOG_FAILURE',
                  payload: err.message
              });
            const errorCode = err.message.split(' ')[5]
            if(errorCode===401) {
                localStorage.removeItem('token');
            } else {
                console.log(err.message)
            }
            });
    } 
}

export const updateNewsArticles = () => {
    return function thunk(dispatch) {
        dispatch({type: 'FETCH_NEWS_ARTICLES'});
        API.getAllNewsArticles().then(res => {
            dispatch({
              type: 'FETCH_NEWS_ARTICLES_SUCCESS',
              payload: res.data
            });
          }).catch(err => {
              dispatch({
                  type: 'FETCH_NEWS_ARTICLES_FAILURE',
                  payload: err.message
              });
            const errorCode = err.message.split(' ')[5]
            if(errorCode===401) {
                localStorage.removeItem('token');
            } else {
                console.log(err.message)
            }
            });
    } 
}

export const updatePressReleases = () => {
    return function thunk(dispatch) {
        dispatch({type: 'FETCH_PRESS_RELEASES'});
        API.getAllPressReleases().then(res => {
            dispatch({
              type: 'FETCH_PRESS_RELEASES_SUCCESS',
              payload: res.data
            });
          }).catch(err => {
              dispatch({
                  type: 'FETCH_PRESS_RELEASES_FAILURE',
                  payload: err.message
              });
            const errorCode = err.message.split(' ')[5]
            if(errorCode===401) {
                localStorage.removeItem('token');
            } else {
                console.log(err.message)
            }
            });
    } 
}