import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import testReducer from './testReducer';

const rootReducer = combineReducers({
  testReducer,
  // Added to support history in redux for React Router
  routing,
});

export default rootReducer;
