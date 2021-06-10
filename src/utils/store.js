import { createStore, combineReducers } from 'redux';
import mailingListReducer from './reducers/mailingListReducer';
import testListReducer from './reducers/testListReducer';

const rootReducer = combineReducers({
    mailingList: mailingListReducer,
    testList: testListReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;