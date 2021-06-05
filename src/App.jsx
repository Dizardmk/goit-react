import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
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

const App = () => (
  <>
    <Section>
      <AppBar />
    </Section>

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={routes.home} component={HomePage} exact />
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.contacts} component={ContactsPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
