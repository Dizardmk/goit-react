import PropTypes from 'prop-types';
import './IconButton.scss';

const IconButton = ({ children, OnClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={OnClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
