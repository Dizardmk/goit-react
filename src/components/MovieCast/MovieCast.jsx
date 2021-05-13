import React, { Component } from 'react';
import API from '../../api/themoviedb';
import Spinner from '../Spinner';
import './MovieCast.scss';
const defaultPic =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';

export default class MovieCast extends Component {
  state = {
    movieCast: [],
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const { movieId } = this.props.match.params;
      const movieCast = await API.getMovieCredits(movieId);
      return this.setState({ movieCast });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { movieCast, error, isLoading } = this.state;

    return (
      <>
        {error && <span>{error}</span>}
        {isLoading && <Spinner />}
        <ul className="cast">
          {movieCast.map(
            ({ id, name, original_name, profile_path, character }) => (
              <li className="cast__item" key={id}>
                <div className="cast__imgBox">
                  <img
                    className="cast__img"
                    src={
                      profile_path
                        ? `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
                        : defaultPic
                    }
                    alt={`${name || original_name} poster`}
                  />
                </div>
                <div className="cast__text">
                  <p className="cast__name">{name || original_name}</p>
                  <p className="cast__character">{character}</p>
                </div>
              </li>
            ),
          )}
        </ul>
      </>
    );
  }
}
