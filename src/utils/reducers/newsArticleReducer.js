const initialState = {
    newsArticles: []
}

const newsArticleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_NEWS_ARTICLES':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default newsArticleReducer;