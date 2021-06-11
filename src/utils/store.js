import { createStore, combineReducers } from 'redux';
import mailingListReducer from './reducers/mailingListReducer';
import testListReducer from './reducers/testListReducer';
import modalReducer from './reducers/modalReducer';
import productReducer from './reducers/productReducer';
import blogReducer from './reducers/blogReducer';
import newsArticleReducer from './reducers/newsArticleReducer';
import pressReleaseReducer from './reducers/pressReleaseReducer';

const rootReducer = combineReducers({
    mailingList: mailingListReducer,
    testList: testListReducer,
    modal: modalReducer,
    products: productReducer,
    blog: blogReducer,
    newsArticles: newsArticleReducer,
    pressReleases: pressReleaseReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;