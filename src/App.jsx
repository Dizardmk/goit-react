import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const DropdownPage = lazy(() =>
  import('./pages/DropdownPage' /* webpackChunkName: "dropdown-page" */),
);
const IconButtonPage = lazy(() =>
  import('./pages/IconButtonPage' /* webpackChunkName: "iconbutton-page" */),
);
const ModalPage = lazy(() =>
  import('./pages/ModalPage' /* webpackChunkName: "modal-page" */),
);
const TabsPage = lazy(() =>
  import('./pages/TabsPage' /* webpackChunkName: "tabs-page" */),
);
const TodoPage = lazy(() =>
  import('./pages/TodoPage' /* webpackChunkName: "todo-page" */),
);
const BooksPage = lazy(() =>
  import('./pages/BooksPage' /* webpackChunkName: "books-page" */),
);
const BookDetailPage = lazy(() =>
  import('./pages/BookDetailPage' /* webpackChunkName: "books-detail-page" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "notfound-page" */),
);

const App = () => (
  <>
    <AppBar />

    {/* <Suspense fallback={<Spinner/>}> */}
    <Suspense fallback={<h1>Loading... 😵</h1>}>
      <Switch>
        <Route path={routes.home} component={HomePage} exact />
        <Route path={routes.dropdown} component={DropdownPage} />
        <Route path={routes.iconbutton} component={IconButtonPage} />
        <Route path={routes.modal} component={ModalPage} />
        <Route path={routes.tabs} component={TabsPage} />
        <Route path={routes.todo} component={TodoPage} />
        <Route path={routes.bookDetail} component={BookDetailPage} />
        <Route path={routes.books} component={BooksPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
