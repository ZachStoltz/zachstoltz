import logger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './redux/reducers';

const middlewares = [thunk];

if (process.env !== 'production') {
  middlewares.push(logger());
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, {}, enhancer);

if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    const nextRootReducer = require('./redux/reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
