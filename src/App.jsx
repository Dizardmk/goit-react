import homepage from './pages/HomePage';
import dropdown from './pages/DropdownPage';
import iconbutton from './pages/IconButtonPage';
import modal from './pages/ModalPage';
import tabs from './pages/Tabs';
import todo from './pages/TodoPage';
import router from './pages/RouterPage';
import notfound from './pages/NotFoundPage';
import { Route, NavLink, Switch } from 'react-router-dom';

const App = () => (
  <>
    <ul className="navigation">
      <li className="navigation__item">
        <NavLink
          exact
          to="/"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          home
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/dropdown"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          dropdown
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/iconbutton"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          iconbutton
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/modal"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          modal
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/tabs"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          tabs
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/todo"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          todo
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/router"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          router
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" component={homepage} exact />
      <Route path="/dropdown" component={dropdown} />
      <Route path="/iconbutton" component={iconbutton} />
      <Route path="/modal" component={modal} />
      <Route path="/tabs" component={tabs} />
      <Route path="/todo" component={todo} />
      <Route path="/router" component={router} />
      <Route component={notfound} />
    </Switch>
  </>
);

export default App;
