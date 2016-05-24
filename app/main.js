import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import routes from './routes';
import localForage from 'localforage';

import reducers from './reducers';

const applyMiddlewares = applyMiddleware(
  promise
);

const createStoreWithMiddleware = compose( autoRehydrate(), applyMiddlewares, window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = (createStoreWithMiddleware(createStore)(
    reducers,
  ));
persistStore(store, {storage: localForage});


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.root'));
