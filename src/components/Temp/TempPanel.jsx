import PropTypes from 'prop-types';
// import './TempPanel.module.css';

const TempPanel = ({ children }) => (
    <div>Panel {children}</div>
);

TempPanel.propTypes = {
children: PropTypes.node.isRequired,
}

export default TempPanel;