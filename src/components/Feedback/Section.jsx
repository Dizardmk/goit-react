import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const Section = ({ title, children }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
