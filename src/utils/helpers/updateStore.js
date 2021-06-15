import API from '../../utils/API';
import store from '../../utils/store';

const token = localStorage.getItem('token');

export const updateMailingList = () => {
    API.getMailingList(token).then(res => {
        store.dispatch({
            type: 'GET_MAILING_LIST',
            payload: {
                mailingList: res.data
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
                testList: res.data
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
    API.getAllProducts().then(res => {
        store.dispatch({
          type: 'GET_PRODUCTS',
          payload: {
            products: res.data
          }
        });
      });
}

export const updateBlogPosts = () => {
    API.getAllBlogPosts().then(res => {
        store.dispatch({
          type: 'GET_BLOG_POSTS',
          payload: {
            blog: res.data
          }
        });
      });
}

export const updateNewsArticles = () => {
    API.getAllNewsArticles().then(res => {
        store.dispatch({
          type: 'GET_NEWS_ARTICLES',
          payload: {
            newsArticles: res.data
          }
        });
      });
}

export const updatePressReleases = () => {
    API.getAllPressReleases().then(res => {
        store.dispatch({
          type: 'GET_PRESS_RELEASES',
          payload: {
            pressReleases: res.data
          }
        });
      });
}