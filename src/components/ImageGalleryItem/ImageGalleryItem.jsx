import PropTypes from 'prop-types';
import defaultImage from '../../images/noImageAvailable.png';

const ImageGalleryItem = ({ image, largeImage, alt }) => (
  <li className="ImageGalleryItem">
    <img
      className="ImageGalleryItem-image"
      src={image}
      alt={alt}
      data-source={largeImage}
    />
  </li>
);

ImageGalleryItem.defaultProps = {
  image: defaultImage,
  largeImage: defaultImage,
};
ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  largeImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
