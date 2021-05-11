import { Link } from 'react-router-dom';
import routes from '../../routes';

const MovieItem = ({ title, id }) => (
  <li>
    <Link to={`${routes.movies}/${id}`}>{title}</Link>
  </li>
);

export default MovieItem;
