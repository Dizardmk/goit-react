import React, { Component } from 'react';
import API from '../../api/themoviedb';
import Spinner from '../Spinner';

export default class MovieCast extends Component {
  state = {
    movieCast: [],
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    try {
      this.setState({ isLoading: true });

      const movieCast = await API.getMovieCredits(movieId);
      console.log(movieCast);
      // return this.setState({ movieCast });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentWillUnmount() {
    // this.setState({ isLoading: false });
  }

  render() {
    const { error, isLoading } = this.state;

    return (
      <>
        {error && <span>{error}</span>}
        {isLoading && <Spinner />}
      </>
    );
  }
}
