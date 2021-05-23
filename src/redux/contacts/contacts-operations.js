import axios from 'axios';
import * as actions from './contacts-actions';
axios.defaults.baseURL = 'http://localhost:4040';

// get
export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.getContactsSuccess(data));
  } catch (error) {
    dispatch(actions.getContactsError(error));
  }
};

// add
export const addContact = (name, number) => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const contact = { name, number };
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

// delete
export const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};
