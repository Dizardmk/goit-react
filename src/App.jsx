import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactsOperations from './redux/contacts/contacts-operations';
import Section from './components/Section';
import ContactEditor from './components/ContactEditor';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';
import Spinner from './components/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts, isLoadingContacts } = this.props;
    return (
      <>
        <Section title="Phonebook">
          <ContactEditor />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && <ContactFilter />}
          <ContactList />
        </Section>
        {isLoadingContacts && <Spinner />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
