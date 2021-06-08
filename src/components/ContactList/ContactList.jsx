import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactEditForm from './ContactEditForm';
import './ContactList.scss';

class ContactList extends Component {
  state = {
    editFormIsOpen: false,
    contactId: null,
  };

  onEditContact = contactId => {
    this.setState({ editFormIsOpen: false });
    this.setState({ editFormIsOpen: true, contactId });
  };

  render() {
    const { editFormIsOpen, contactId } = this.state;
    const { contacts, onDeleteContact } = this.props;

    return (
      <>
        {contacts.length === 0 ? (
          <p>We didn't find anything 😢</p>
        ) : (
          <div className="contactList">
            <ul className="contactList__list">
              {contacts.map(({ id, name, number }) => (
                <li className="contactList__item" key={id}>
                  {editFormIsOpen && contactId === id ? (
                    <ContactEditForm
                      onCloseContact={this.onEditContact}
                      contactItem={{ id, name, number }}
                    />
                  ) : (
                    <>
                      <div className="contactList__item-container">
                        <span>{name}</span>
                        <span>{number}</span>
                      </div>

                      <div className="contactList__item-container">
                        <button
                          className="contactList__button contactList__button--edit"
                          onClick={() => this.onEditContact(id)}
                        >
                          Edit
                        </button>
                        <button
                          className="contactList__button contactList__button--delete"
                          onClick={() => onDeleteContact(id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <b>{contacts.length} Contacts</b>
          </div>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
