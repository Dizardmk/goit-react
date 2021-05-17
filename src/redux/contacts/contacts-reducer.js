import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  ///////////////////////// ADD
  if (type === types.ADD) {
    const addContactFilter = state.find(
      ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (addContactFilter) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
    return [...state, payload];
  }
  ///////////////////////// DELETE
  if (type === types.DELETE) {
    return state.filter(({ id }) => id !== payload);
  }
  ///////////////////////// DEFAULT
  return state;

  // switch (type) {
  //   case types.ADD: return [...state, payload];
  //   case types.DELETE: return state.filter(({ id }) => id !== payload);
  //   default: return state;
  // }
};

const filter = (state = '', { type, payload }) => {
  return type === types.CHANGE_FILTER ? payload : state;

  // if (type === types.CHANGE_FILTER) {return payload;}
  // return state;

  // switch (type) {
  //   case types.CHANGE_FILTER: return payload;
  //   default: return state;
  // }
};

export default combineReducers({
  items,
  filter,
});
