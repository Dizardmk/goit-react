// import PropTypes from 'prop-types';
// import styles from './TempComponent.module.css';

const TempComponent = ({ mainProp }) => (
  <>
    {mainProp.map(({ prop1 }) => (
      <h1>{prop1}</h1>
    ))}
  </>
);

TempComponent.defaultProps = {
  // mainProp: 'text',
};
TempComponent.propTypes = {
  // mainProp: PropTypes.string,
  //   prop2: PropTypes.string.isRequired,
  //
  //   friends: PropTypes.array.isRequired,
  //
  //   friends: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       avatar: PropTypes.string,
  //       name: PropTypes.string.isRequired,
  //     }),
  //   ).isRequired,
};

export default TempComponent;
