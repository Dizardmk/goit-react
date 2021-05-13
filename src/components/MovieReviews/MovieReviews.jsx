import React, { Component } from 'react';
import API from '../../api/themoviedb';
import Spinner from '../Spinner';
import './MovieReviews.scss';

export default class MovieReviews extends Component {
  state = {
    movieReviews: [],
    error: null,
    isLoading: false,
    // componentMounted: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      // this.setState({ componentMounted: true });
      // console.log('after set true', this.state.componentMounted);
      // if (this.state.componentMounted) {
      const { movieId } = this.props.match.params;
      const movieReviews = await API.getMovieReviews(movieId);
      return this.setState({ movieReviews });
      // }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  // componentWillUnmount() {
  //   // this.setState({ componentMounted: false });
  // }

  render() {
    const { movieReviews, error, isLoading } = this.state;

    return (
      <>
        {error && <span>{error}</span>}
        {isLoading && <Spinner />}
        {movieReviews.length === 0 ? (
          <h4>No reviews here yet 🙊</h4>
        ) : (
          <div>
            {movieReviews.map(({ id, author, content }) => (
              <ul className="reviews" key={id}>
                <li className="reviews__item">
                  <h4 className="reviews__author">Author: {author}</h4>
                  <p className="reviews__text">{content}</p>
                </li>
              </ul>
            ))}
          </div>
        )}
      </>
    );
  }
}
