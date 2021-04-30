import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/Phonebook/Section';
import ContactEditor from './components/Phonebook/ContactEditor';
import ContactFilter from './components/Phonebook/ContactFilter';
import ContactList from './components/Phonebook/ContactList';
import styles from './components/Phonebook/Phonebook.module.scss';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const addContactFilter = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    addContactFilter
      ? alert(`${name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilterContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={styles.phonebook}>
        <Section title="Phonebook">
          <ContactEditor onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <ContactFilter value={filter} onChange={this.changeFilterContact} />
          )}
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
