import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

// combine을 이용하여 Rootreducer로 묶음.
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;
