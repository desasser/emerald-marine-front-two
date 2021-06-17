import API from '../../utils/API';
import store from '../../utils/store';

const token = localStorage.getItem('token');

export const updateMailingList = () => {
    API.getMailingList(token).then(res => {
        store.dispatch({
            type: 'GET_MAILING_LIST',
            payload: {
                mailingList: res.data.slice()
            }
        });
    }).catch(err => {
    const errorCode = err.message.split(' ')[5]
    if(errorCode===401) {
        localStorage.removeItem('token');
    } else {
        console.log(err.message)
    }
    });
}

export const updateTestList = () => {
    API.getTestList(token).then(res => {
        store.dispatch({
            type: 'GET_TEST_LIST',
            payload: {
                testList: res.data.slice()
            }
        })
    }).catch(err => {
        const errorCode = err.message.split(' ')[5]
        if(errorCode===401) {
            localStorage.removeItem('token');
        } else {
            console.log(err.message)
        }
    });
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
    API.getAllBlogPosts().then(res => {
        store.dispatch({
          type: 'GET_BLOG_POSTS',
          payload: {
            blog: res.data.slice()
          }
        });
      }).catch(err => {
        const errorCode = err.message.split(' ')[5]
        if(errorCode===401) {
            localStorage.removeItem('token');
        } else {
            console.log(err.message)
        }
        });
}

export const updateNewsArticles = () => {
    API.getAllNewsArticles().then(res => {
        store.dispatch({
          type: 'GET_NEWS_ARTICLES',
          payload: {
            newsArticles: res.data.slice()
          }
        });
      }).catch(err => {
        const errorCode = err.message.split(' ')[5]
        if(errorCode===401) {
            localStorage.removeItem('token');
        } else {
            console.log(err.message)
        }
        });
}

export const updatePressReleases = () => {
    API.getAllPressReleases().then(res => {
        store.dispatch({
          type: 'GET_PRESS_RELEASES',
          payload: {
            pressReleases: res.data.slice()
          }
        });
      }).catch(err => {
        const errorCode = err.message.split(' ')[5]
        if(errorCode===401) {
            localStorage.removeItem('token');
        } else {
            console.log(err.message)
        }
        });
}