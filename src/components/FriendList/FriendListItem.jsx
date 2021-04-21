import PropTypes from 'prop-types';
import defaultFriendPhoto from '../SocialProfile/images/defaultUserPhoto.svg';
import styles from './FriendList.module.css';

const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <span
          className={styles.status}
          style={
            isOnline
              ? { backgroundColor: 'LimeGreen' }
              : { backgroundColor: 'red' }
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
    ))}
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultFriendPhoto,
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
