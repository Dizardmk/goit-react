import { createSelector } from '@reduxjs/toolkit';

// all contacts
export const getContacts = state => state.contacts.items;

// filter
export const getFilter = state => state.contacts.filter;

// memoize filtered contacts
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

// filtered contacts
// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
