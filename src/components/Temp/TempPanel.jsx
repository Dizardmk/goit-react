import PropTypes from 'prop-types';
import styles from './TempPanel.module.css';

const TempPanel = ({ children }) => (
  <div className={styles.panel}>{children}</div>
);

TempPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TempPanel;
