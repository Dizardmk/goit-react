import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class ContactsPage extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contactsLenght, isLoadingContacts } = this.props;

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
}

const mapStateToProps = state => ({
  contactsLenght: getContactsLenght(state),
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
