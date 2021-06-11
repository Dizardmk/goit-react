import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsLenght,
  getLoading,
} from '../redux/contacts/contacts-selectors';
import { getContacts } from '../redux/contacts/contacts-operations';
import Section from '../components/Section';
import ContactEditor from '../components/ContactEditor';
import ContactFilter from '../components/ContactFilter';
import ContactList from '../components/ContactList';
import Spinner from '../components/Spinner';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contactsLenght = useSelector(getContactsLenght);
  const isLoadingContacts = useSelector(getLoading);

  return (
    <>
      <Section>
        <ContactEditor />
      </Section>
      <Section title="Contacts">
        {contactsLenght > 0 && <ContactFilter />}
        <ContactList />
        {isLoadingContacts && <Spinner />}
      </Section>
    </>
  );
}
