import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.length === 0 ? (
      <p>No contact here yet 🙈</p>
    ) : (
      <div className="contactList">
        <ul className="contactList__list">
          {contacts.map(({ id, name, number }) => (
            <li className="contactList__item" key={id}>
              <span>
                {name}: {number}
              </span>
              <button
                className="contactList__button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <span>{contacts.length} Contacts</span>
      </div>
    )}
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
