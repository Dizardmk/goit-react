import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul className="navList">
      <li className="navList__item">
        <NavLink
          exact
          to={routes.home}
          className="navList__link"
          activeClassName="navList__link--active"
        >
          home
        </NavLink>
      </li>
      <li className="navList__item">
        <NavLink
          to={routes.contacts}
          className="navList__link"
          activeClassName="navList__link--active"
        >
          contacts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
