import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ onImageClick, images }) => (
  <ul className="ImageGallery" onClick={onImageClick}>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        image={webformatURL}
        largeImage={largeImageURL}
        alt={tags}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
