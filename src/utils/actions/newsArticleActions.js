import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchNewsArticlesSuccess = newsArticles => ({
    type: 'FETCH_NEWS_ARTICLES_SUCCESS',
    payload: newsArticles
})

const fetchNewsArticlesFailure = err => ({
    type: 'FETCH_NEWS_ARTICLES_FAILURE',
    payload: err.message
})

export const fetchNewsArticles = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${URL_PREFIX}/news`)
            dispatch(fetchNewsArticlesSuccess(res))
        }
        catch(err) {
            dispatch(fetchNewsArticlesFailure(err));
        }
    }
}