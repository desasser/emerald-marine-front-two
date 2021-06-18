import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './utils/store';
import { updateProducts, updateBlogPosts, updateNewsArticles, updatePressReleases } from './utils/helpers/updateStore';

updateProducts();
updateBlogPosts();
updateNewsArticles();
updatePressReleases();

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

