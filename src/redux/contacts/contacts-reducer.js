import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const items = createReducer([], {
  // get
  [actions.getContactsSuccess]: (_state, { payload }) => payload,
  // add
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  // delete
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.editContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

// filter
const filter = createReducer('', {
  [actions.changeFilterContact]: (_state, { payload }) => payload,
});

const loading = createReducer(false, {
  // get
  [actions.getContactsRequest]: () => true,
  [actions.getContactsSuccess]: () => false,
  [actions.getContactsError]: () => false,
  // add
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  // edit
  [actions.editContactRequest]: () => true,
  [actions.editContactSuccess]: () => false,
  [actions.editContactError]: () => false,
  // delete
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
