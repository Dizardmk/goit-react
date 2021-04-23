import PropTypes from 'prop-types';
import defaultFriendPhoto from '../SocialProfile/images/defaultUserPhoto.svg';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={
        isOnline ? { backgroundColor: 'LimeGreen' } : { backgroundColor: 'red' }
      }
    ></span>
    <img
      className={styles.avatar}
      src={avatar}
      alt={`Аватар пользователя ${name}`}
      width="48"
    />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultFriendPhoto,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
