import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import Navigation from './Navigation';
import UserMenu from '../AppBar/UserMenu';
import AuthNav from './AuthNav';
import './AppBar.scss';

const AppBar = ({ isAuthenticated }) => (
  <header className="header">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
