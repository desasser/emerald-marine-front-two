import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './utils/store';
import {fetchProducts} from './utils/actions/productActions';
import {fetchNewsArticles} from './utils/actions/newsArticleActions';
import {fetchPressReleases} from './utils/actions/pressReleaseActions';
import {fetchBlog} from './utils/actions/blogActions'

store.dispatch(fetchProducts());
store.dispatch(fetchNewsArticles());
store.dispatch(fetchPressReleases());
store.dispatch(fetchBlog());

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

