import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <>
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  </>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
