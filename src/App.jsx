import React from 'react';
import { connect } from 'react-redux';
import Section from './components/Section';
import ContactEditor from './components/ContactEditor';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

const App = ({ contacts }) => (
  <>
    <Section title="Phonebook">
      <ContactEditor />
    </Section>
    <Section title="Contacts">
      {contacts.length > 0 && <ContactFilter />}
      <ContactList />
    </Section>
  </>
);

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
