import PropTypes from 'prop-types';

const Button = ({ onButtonClick }) => (
  <button className="Button" type="button" onClick={onButtonClick}>
    Load more
  </button>
);

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
