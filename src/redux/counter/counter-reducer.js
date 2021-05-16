import { combineReducers } from 'redux';
import types from './counter-types';

const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case types.increment:
      return state + action.payload;

    case types.decrement:
      return state - action.payload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
