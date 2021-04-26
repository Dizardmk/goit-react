import PropTypes from 'prop-types';
import styles from './ContactFilter.module.scss';

const ContactFilter = ({ value, onChange }) => (
  <label>
    <span className={styles.title}>Find contacts by name</span>
    <input
      className={styles.input}
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

export default ContactFilter;
