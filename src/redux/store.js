import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-reducer';
import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
