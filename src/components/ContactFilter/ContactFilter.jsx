import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterContact } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import './ContactFilter.scss';

export default function ContactFilter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChange = useCallback(
    event => {
      dispatch(changeFilterContact(event.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <label className="contactFilter">
      <span className="contactFilter__title">Find contacts by name</span>
      <input
        className="contactFilter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
