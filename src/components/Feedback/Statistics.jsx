import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <div className={styles.statistics}>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {positive}%</span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
