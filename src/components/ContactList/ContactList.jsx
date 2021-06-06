import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.length === 0 ? (
      <p>We didn't find anything 😢</p>
    ) : (
      <div className="contactList">
        <ul className="contactList__list">
          {contacts.map(({ id, name, number }) => (
            <li className="contactList__item" key={id}>
              <div className="contactList__item-container">
                <span>{name}</span>
                <span>{number}</span>
              </div>
              <button
                className="contactList__button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <b>{contacts.length} Contacts</b>
      </div>
    )}
  </>
);

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
