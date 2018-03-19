import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import axios from 'axios';
import './index.css';
import rootReducer from './reducers/rootReducer';
import { API_HOST_URL, API_ROUTE, X_AUTH, TOKEN_EXPIRE_DAY } from './constants';

// Log only in development
let middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// Keep react-router and redux in sync
const history = createHistory();
const router = routerMiddleware(history);
middlewares.push(router);

// Redux store
let store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

// set axios base url and set response header x-auth
axios.defaults.baseURL = `${API_HOST_URL}${API_ROUTE}`;
axios.interceptors.response.use((res) => {
  const { headers = {} } = res;
  if (headers[X_AUTH]) {
    axios.defaults.headers.common[X_AUTH] = headers[X_AUTH];
    window.localStorage.setItem('token', headers[X_AUTH]);

    // user cant keep login with expired token
    let expireAt = new Date();
    expireAt.setDate(expireAt.getDate() + TOKEN_EXPIRE_DAY);
    window.localStorage.setItem('expiredAt', expireAt.toString());
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
