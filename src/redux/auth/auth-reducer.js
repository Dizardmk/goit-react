import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  loginError,
  loginSuccess,
  registerError,
  registerSuccess,
} from './auth-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registerSuccess]: (_state, { payload: { user } }) => user,
    [loginSuccess]: (_state, { payload: { user } }) => user,
  },
);
const token = createReducer(null, {
  [registerSuccess]: (_state, { payload: { token } }) => token,
  [loginSuccess]: (_state, { payload: { token } }) => token,
});
const error = createReducer(null, {
  [registerError]: (_state, { payload }) => payload,
  [loginError]: (_state, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
