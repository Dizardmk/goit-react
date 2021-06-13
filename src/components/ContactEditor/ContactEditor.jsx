import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import './ContactEditor.scss';

export default function ContactEditor() {
  const [user, setUser] = useState({
    name: '',
    number: '',
  });
  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  }, []);

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      // contacts duplicate check
      contacts.find(
        ({ name }) => name.toLowerCase() === user.name.toLowerCase(),
      )
        ? alert(`${user.name} is alredy in contacts`)
        : dispatch(addContact(user));

      setUser({
        name: '',
        number: '',
      });
    },
    [dispatch, user, contacts],
  );

  return (
    <form className="contactEditor" onSubmit={handleSubmit}>
      <label>
        <span className="contactEditor__title">Name</span>
        <input
          className="contactEditor__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <span className="contactEditor__title">Number</span>
        <input
          className="contactEditor__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={user.number}
          onChange={handleChange}
        />
      </label>
      <button className="contactEditor__button" type="submit">
        Add contact
      </button>
    </form>
  );
}
