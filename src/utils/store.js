import { createStore, combineReducers } from 'redux';
import mailingListReducer from './reducers/mailingListReducer';
import testListReducer from './reducers/testListReducer';
import modalReducer from './reducers/modalReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    mailingList: mailingListReducer,
    testList: testListReducer,
    modal: modalReducer,
    products: productReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;