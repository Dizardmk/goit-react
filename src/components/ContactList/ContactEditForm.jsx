import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/contacts-operations';
import './ContactList.scss';

export default function ContactEditForm({ contactItem, onCloseContact }) {
  useEffect(() => {
    setUser(contactItem);
  }, [contactItem]);

  const [user, setUser] = useState({
    id: '',
    name: '',
    number: '',
  });
  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  }, []);

  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(editContact(user));
      onCloseContact();
    },
    [dispatch, user, onCloseContact],
  );

  return (
    <>
      <div className="contactList__item-container">
        <input
          className="contactList__editInput"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder={'Name'}
          required
          value={user.name}
          onChange={handleChange}
        />
        <input
          className="contactList__editInput"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder={'Number'}
          required
          value={user.number}
          onChange={handleChange}
        />
      </div>

      <div className="contactList__item-container">
        <button
          className="contactList__button contactList__button--edit"
          type="button"
          onClick={handleSubmit}
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
