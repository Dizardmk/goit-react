import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.length === 0 ? (
      <p>No contact here yet 🙈</p>
    ) : (
      <div>
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
              <span>
                {name}: {number}
              </span>
              <button
                className={styles.button}
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

export default ContactList;
