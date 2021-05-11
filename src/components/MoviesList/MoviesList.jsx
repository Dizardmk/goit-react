import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';

const MoviesList = ({ movies }) => (
  <ul className="moviesList">
    {movies.map(({ title, id }) => (
      <MovieItem title={title} id={id} key={id} />
    ))}
  </ul>
);

export default MoviesList;
