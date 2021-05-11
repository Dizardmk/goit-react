import React, { Component } from 'react';
import API from '../api/themoviedb';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';

export default class MoviesPage extends Component {
  state = {
    searchingMovies: [],
    searchQuery: '',
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies();
    }
  }

  searchMovies = async () => {
    const { searchQuery } = this.state;

    try {
      this.setState({ isLoading: true });
      const searchingMovies = await API.searchMovies(searchQuery);
      return this.setState({ searchingMovies });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onChangeQuery = query => {
    this.setState({ searchQuery: query, error: null });
  };

  render() {
    const { searchingMovies, isLoading, error } = this.state;

    return (
      <div className="content">
        <SearchBar onSubmit={this.onChangeQuery} />
        <MoviesList movies={searchingMovies} />
        {isLoading && <Spinner />}
        {error && <span>{error}</span>}
      </div>
    );
  }
}
