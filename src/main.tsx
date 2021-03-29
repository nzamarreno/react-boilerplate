import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './store/reducers/beerReducer';
import { mySaga } from './saga/beerSaga';
import { Router } from './router';

import './main.scss';

const IS_PRODUCTION = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();

if (IS_PRODUCTION) {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const reduxDebug = IS_PRODUCTION
  ? composeWithDevTools(applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, reduxDebug);

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#app'),
);
