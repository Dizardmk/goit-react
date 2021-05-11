import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AppBar.scss';

const AppBar = () => (
  <ul className="navigation">
    <li className="navigation__item">
      <NavLink
        exact
        to={routes.home}
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        home
      </NavLink>
    </li>
    <li className="navigation__item">
      <NavLink
        to={routes.movies}
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        movies
      </NavLink>
    </li>
  </ul>
);

export default AppBar;
