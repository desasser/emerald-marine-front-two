import { createStore, combineReducers } from 'redux';
import mailingListReducer from './reducers/mailingListReducer';

const rootReducer = combineReducers({
    mailingList: mailingListReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;