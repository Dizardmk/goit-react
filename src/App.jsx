import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Section from './components/Section';
import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Spinner';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <AppBar />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>

          <PublicRoute
            restricted
            path={routes.register}
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            restricted
            path={routes.login}
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Section>
  );
}
