import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import './ContactFilter.scss';

const ContactFilter = ({ value, onChange }) => (
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

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.changeFilterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
