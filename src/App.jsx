import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from './redux/contacts/contacts-operations';
import {
  getContactsLenght,
  getLoading,
} from './redux/contacts/contacts-selectors';
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
    const { contactsLenght, isLoadingContacts } = this.props;
    return (
      <>
        <Section title="Phonebook">
          <ContactEditor />
        </Section>
        <Section title="Contacts">
          {contactsLenght > 0 && <ContactFilter />}
          <ContactList />
        </Section>
        {isLoadingContacts && <Spinner />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contactsLenght: getContactsLenght(state),
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
