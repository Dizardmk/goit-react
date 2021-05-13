import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';

const MovieItem = ({ title, id, location }) => (
  <li>
    <Link
      to={{
        pathname: `${routes.movies}/${id}`,
        state: { from: location },
      }}
    >
      {title}
    </Link>
  </li>
);

export default withRouter(MovieItem);
