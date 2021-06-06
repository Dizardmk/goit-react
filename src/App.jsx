import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
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

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <Section>
        <AppBar />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              restricted
              path={routes.register}
              redirectTo={routes.contacts}
              component={RegisterPage}
            />
            <PublicRoute
              restricted
              path={routes.login}
              redirectTo={routes.contacts}
              component={LoginPage}
            />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsPage}
            />
          </Switch>
        </Suspense>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
