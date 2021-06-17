import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mailingListReducer from './reducers/mailingListReducer';
import testListReducer from './reducers/testListReducer';
import modalReducer from './reducers/modalReducer';
import productReducer from './reducers/productReducer';
import blogReducer from './reducers/blogReducer';
import newsArticleReducer from './reducers/newsArticleReducer';
import pressReleaseReducer from './reducers/pressReleaseReducer';

let rootReducer = combineReducers({
    mailingList: mailingListReducer,
    testList: testListReducer,
    modal: modalReducer,
    products: productReducer,
    blog: blogReducer,
    newsArticles: newsArticleReducer,
    pressReleases: pressReleaseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))  
)

export default store;