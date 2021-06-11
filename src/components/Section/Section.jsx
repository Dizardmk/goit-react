import PropTypes from 'prop-types';
import './Section.scss';

export default function Section({ title, children }) {
  return (
    <div className="container">
      {title && <h2 className="container__title">{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
