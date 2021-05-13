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

  componentDidMount() {
    const searchParams = this.props.location.search;
    const parsedParams = new URLSearchParams(searchParams);
    const queryValue = parsedParams.get('query');
    if (queryValue) {
      this.setState({ searchQuery: queryValue });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies();
    }
  }

  searchMovies = async () => {
    try {
      this.setState({ isLoading: true });
      const { searchQuery } = this.state;
      const searchingMovies = await API.searchMovies(searchQuery);
      return this.setState({ searchingMovies });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onChangeQuery = query => {
    if (!query) return;
    this.setState({ searchQuery: query, error: null });
    this.props.history.push({
      search: `query=${query}`,
    });
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
