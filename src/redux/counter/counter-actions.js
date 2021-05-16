import types from './counter-types';

export const increment = value => ({
  type: types.increment,
  payload: value,
});
export const decrement = value => ({
  type: types.decrement,
  payload: value,
});
