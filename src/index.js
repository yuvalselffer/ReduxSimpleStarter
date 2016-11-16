import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import routes from './routes';

const middlewares = composeWithDevTools(
  applyMiddleware(ReduxPromise),
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={createStore(reducers, middlewares)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
