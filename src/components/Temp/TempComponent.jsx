import PropTypes from 'prop-types';
// import './TempComponent.module.css';

const TempComponent = ({ title, alt }) => (
    <>
        <h1 title={title} alt={alt}>This is TempComponent</h1>
    </>
);

TempComponent.defaultProps = {
    title: 'This is default title from TempComponent'
}
TempComponent.propTypes = {
title: PropTypes.string,
alt: PropTypes.string.isRequired,
}

export default TempComponent;