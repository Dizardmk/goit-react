import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AppBar = () => {
  return (
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
          to={routes.dropdown}
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          dropdown
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to={routes.iconbutton}
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          iconbutton
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to={routes.modal}
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          modal
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to={routes.tabs}
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          tabs
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to={routes.todo}
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          todo
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to={routes.books}
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          books
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBar;
