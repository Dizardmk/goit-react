import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';
import routes from '../../../routes';
import './Navigation.scss';

const Navigation = ({ isAuthenticated }) => (
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
      {isAuthenticated && (
        <li className="navList__item">
          <NavLink
            to={routes.contacts}
            className="navList__link"
            activeClassName="navList__link--active"
          >
            contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
