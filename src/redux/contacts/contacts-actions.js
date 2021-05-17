import shortid from 'shortid';
import types from './contacts-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilterContact = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});