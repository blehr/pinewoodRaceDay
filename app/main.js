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

import ga from 'react-ga';
ga.initialize('UA-78496724-1');

function logPageView() {
  ga.pageview(window.location.pathname);
}

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
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>
  , document.querySelector('.root'));
