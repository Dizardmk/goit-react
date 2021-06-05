import { connect } from 'react-redux';
import { getUsername } from '../../../redux/auth/auth-selectors';
import defaultImage from './defaultImage.png';
import './UserMenu.scss';

const UserMenu = ({ username, onLogout }) => (
  <div className="userMenu">
    <img
      src={defaultImage}
      alt="Monkey Face"
      className="userMenu__item userMenu__image"
    />
    <p className="userMenu__item">
      Welcome, <span className="userMenu__username">{username}</span>
    </p>
    <button
      type="button"
      className="userMenu__item userMenu__button"
      onClick={onLogout}
    >
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  username: getUsername(state),
});

export default connect(mapStateToProps)(UserMenu);
