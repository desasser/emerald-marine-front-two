const initialState = {
    loading: false,
    success: false,
    newsArticles: [],
    error: ''
}

const newsArticleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_NEWS_ARTICLES':
            return {
                loading: true,
                success: false,
                newsArticles: [],
                error: ''
            }
        case 'FETCH_NEWS_ARTICLES_SUCCESS':
            return {
                loading: false,
                success: true,
                newsArticles: action.payload,
                error: ''
            }
        case 'FETCH_NEWS_ARTICLES_FAILURE':
            return {
                loading: false,
                success: false,
                newsArticles: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default newsArticleReducer;