import axios from 'axios';
import * as actions from './contacts-actions';

// get
export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.getContactsSuccess(data));
  } catch (error) {
    dispatch(actions.getContactsError(error.message));
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
    dispatch(actions.addContactError(error.message));
  }
};

// edit
export const editContact =
  ({ id, name, number }) =>
  async dispatch => {
    const update = { name, number };
    dispatch(actions.editContactRequest());

    try {
      const { data } = await axios.patch(`/contacts/${id}`, update);
      dispatch(actions.editContactSuccess(data));
    } catch (error) {
      dispatch(actions.editContactError(error.message));
    }
  };

// delete
export const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};
