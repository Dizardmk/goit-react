import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import './AuthNav.scss';

export default function AuthNav() {
  return (
    <ul className="authNav">
      <li className="authNav__item">
        <NavLink
          to={routes.register}
          className="authNav__link"
          activeClassName="authNav__link--active"
        >
          Register
        </NavLink>
      </li>
      <li className="authNav__item">
        <span>or</span>
      </li>
      <li className="authNav__item">
        <NavLink
          to={routes.login}
          className="authNav__link"
          activeClassName="authNav__link--active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}
