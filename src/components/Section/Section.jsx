import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ title, children }) => (
  <div className="container">
    <h2 className="container__title">{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
