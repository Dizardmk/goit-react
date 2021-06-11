import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import defaultImage from './defaultImage.png';
import './UserMenu.scss';

export default function UserMenu() {
  const username = useSelector(getUsername);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
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
}
