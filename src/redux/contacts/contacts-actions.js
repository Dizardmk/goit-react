import { createAction } from '@reduxjs/toolkit';

// get
export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

// add
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// edit
export const editContactRequest = createAction('contacts/editContactRequest');
export const editContactSuccess = createAction('contacts/editContactSuccess');
export const editContactError = createAction('contacts/editContactError');

// delete
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// filter
export const changeFilterContact = createAction('contacts/ChangeFilter');
