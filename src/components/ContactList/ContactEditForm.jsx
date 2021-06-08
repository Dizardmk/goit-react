import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editContact } from '../../redux/contacts/contacts-operations';
import './ContactList.scss';

class editContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const {
      contactItem: { id, name, number },
    } = this.props;

    this.setState({
      id,
      name,
      number,
    });
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editContact(this.state);
    this.props.onCloseContact();
  };

  render() {
    const { name, number } = this.state;
    const { onCloseContact } = this.props;

    return (
      <>
        <div className="contactList__item-container">
          <input
            className="contactList__editInput"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
          <input
            className="contactList__editInput"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </div>

        <div className="contactList__item-container">
          <button
            className="contactList__button contactList__button--edit"
            type="button"
            onClick={this.handleSubmit}
          >
            Save
          </button>
          <button
            className="contactList__button contactList__button--delete"
            type="button"
            onClick={onCloseContact}
          >
            Close
          </button>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  editContact,
};

export default connect(null, mapDispatchToProps)(editContactForm);
