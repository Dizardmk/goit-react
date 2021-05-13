import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import routes from '../routes';
import API from '../api/themoviedb';
import Spinner from '../components/Spinner';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';
import './MovieDetailsPage.scss';

export default class MovieDetailsPage extends Component {
  state = {
    image: null,
    title: null,
    year: null,
    rating: null,
    overview: null,
    genres: [],
    error: null,
    isLoading: false,
    savedLocation: null,
  };

  async componentDidMount() {
    const { location } = this.props;

    location.state && location.state.from
      ? this.setState({ savedLocation: location.state.from })
      : this.setState({ savedLocation: routes.movies });

    try {
      const { movieId } = this.props.match.params;
      this.setState({ isLoading: true });
      const movieDetails = await API.getMovieDetails(movieId);
      return this.setState({ ...movieDetails });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.movies);

    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push(routes.movies);

    // NEW ECMA 2020 SPEC - Optional chaining
    // history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { url } = this.props.match;
    const {
      title,
      rating,
      overview,
      genres,
      image,
      year,
      error,
      isLoading,
      savedLocation,
    } = this.state;

    return (
      <>
        {error && <span>{error}</span>}
        {isLoading && <Spinner />}
        {!isLoading && (
          <div className="content">
            <button
              className="button"
              type="button"
              onClick={this.handleGoBack}
            >
              Go back
            </button>
            <div className="movieDetail">
              <div className="poster">
                <img
                  className="poster__image"
                  src={image}
                  alt={`${title} poster`}
                />
              </div>
              <div className="movieInfo">
                <h1>
                  {title} ({year})
                </h1>
                <p className="movieInfo__score">
                  User Score:{' '}
                  {rating === 0 ? 'No rating here yet 🙈' : `${rating}%`}
                </p>
                <h2>Overview</h2>
                <p className="movieInfo__overview">{overview}</p>
                <h3>Genres</h3>
                <p className="movieInfo__genres">{genres}</p>
              </div>
            </div>
            <div className="additional">
              <p className="additional__title">Additional information</p>
              <ul className="additional__list">
                <li>
                  <Link
                    to={{
                      pathname: `${url}/cast`,
                      state: { from: savedLocation },
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `${url}/reviews`,
                      state: { from: savedLocation },
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Route path={routes.movieCast} component={MovieCast} />
            <Route path={routes.movieReviews} component={MovieReviews} />
          </div>
        )}
      </>
    );
  }
}
