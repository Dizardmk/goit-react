import PropTypes from 'prop-types';
import defaultUserPhoto from './images/defaultUserPhoto.svg';
import styles from './SocialProfile.module.css';

const SocialProfile = ({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt={`Аватар пользователя ${name}`}
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

SocialProfile.defaultProps = {
  avatar: defaultUserPhoto,
};
SocialProfile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string, //not required
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default SocialProfile;
