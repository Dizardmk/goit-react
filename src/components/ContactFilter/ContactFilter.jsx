import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilterContact } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
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
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
