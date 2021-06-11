import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import Navigation from './Navigation';
import UserMenu from '../AppBar/UserMenu';
import AuthNav from './AuthNav';
import './AppBar.scss';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header className="header">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
