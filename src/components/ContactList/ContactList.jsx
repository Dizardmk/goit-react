import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
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

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
