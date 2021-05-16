import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './components/Section';
import ContactEditor from './components/ContactEditor';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

class App extends Component {
  // componentDidMount() {
  //   if (JSON.parse(localStorage.getItem('contacts'))) {
  //     this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    const { contacts } = this.props;

    return (
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
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
