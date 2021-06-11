import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactEditForm from './ContactEditForm';
import './ContactList.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [contactId, setContactId] = useState(null);

  const onEditContact = useCallback(contactId => {
    setEditFormIsOpen(false);
    setEditFormIsOpen(true);
    setContactId(contactId);
  }, []);

  const onDeleteContact = useCallback(
    id => dispatch(deleteContact(id)),
    [dispatch],
  );

  const contacts = useSelector(getFilteredContacts);

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
                    onCloseContact={onEditContact}
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
                        onClick={() => onEditContact(id)}
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
