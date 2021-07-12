import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mailingListReducer from './reducers/mailingListReducer';
import testListReducer from './reducers/testListReducer';
import productReducer from './reducers/productReducer';
import blogReducer from './reducers/blogReducer';
import newsArticleReducer from './reducers/newsArticleReducer';
import pressReleaseReducer from './reducers/pressReleaseReducer';
import widgetReducer from './reducers/widgetReducer';
import cartReducer from './reducers/cartReducer';
import blogContentReducer from './reducers/blogContentReducer';
import contentReducer from './reducers/contentReducer'

const rootReducer = combineReducers({
    mailingList: mailingListReducer,
    testList: testListReducer,
    products: productReducer,
    blog: blogReducer,
    newsArticles: newsArticleReducer,
    pressReleases: pressReleaseReducer,
    widgetReducer: widgetReducer,
    cartReducer: cartReducer,
    blogContent: blogContentReducer,
    content: contentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;