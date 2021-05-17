import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const items = createReducer([], {
  ///////////////////////////// ADD
  [actions.addContact]: (state, { payload }) =>
    state.find(({ name }) => name.toLowerCase() === payload.name.toLowerCase())
      ? alert(`${payload.name} is already in contacts.`)
      : [...state, payload],
  // {
  //   const addContactFilter = state.find(
  //     ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
  //   );
  //   if (addContactFilter) {
  //     alert(`${payload.name} is already in contacts.`);
  //     return state;
  //   }
  //   return [...state, payload];
  // },
  ///////////////////////////// DELETE
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilterContact]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
