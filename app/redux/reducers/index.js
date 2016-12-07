import { combineReducers } from 'redux';
import testReducer from './testReducer';
import { routerReducer as routing } from 'react-router-redux';
const rootReducer = combineReducers({
  testReducer,
  // Added to support history in redux for React Router
  routing,
});

export default rootReducer;
