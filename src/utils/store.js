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
import purchaseReducer from './reducers/purchaseReducer';
import blogContentReducer from './reducers/blogContentReducer';
import contentReducer from './reducers/contentReducer';
import productSpecsReducer from './reducers/productSpecsReducer'

const rootReducer = combineReducers({
    mailingList: mailingListReducer,
    testList: testListReducer,
    products: productReducer,
    blog: blogReducer,
    newsArticles: newsArticleReducer,
    pressReleases: pressReleaseReducer,
    widgetReducer: widgetReducer,
    cartReducer: cartReducer,
    purchaseReducer: purchaseReducer,
    blogContent: blogContentReducer,
    content: contentReducer,
    productSpecs: productSpecsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;