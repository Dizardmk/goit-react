import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.buttonsGroup}>
    {options.map(option => (
      <button
        className={styles.button}
        type="button"
        key={option}
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    ))}
  </div>
);

// Feedback.defaultProps = {
//   options: ['good', 'neutral', 'bad'],
// };
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
