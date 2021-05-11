import React, { Component } from 'react';
import API from '../api/themoviedb';
import Spinner from '../components/Spinner';
import MoviesList from '../components/MoviesList';
import './HomePage.scss';

export default class HomePage extends Component {
  state = {
    trendingMovie: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const trendingMovie = await API.getTrending();
      return this.setState({ trendingMovie });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { trendingMovie, isLoading, error } = this.state;

    return (
      <div className="content">
        <h1 className="title">Trending today</h1>
        <MoviesList movies={trendingMovie} />
        {isLoading && <Spinner />}
        {error && <span>{error}</span>}
      </div>
    );
  }
}
