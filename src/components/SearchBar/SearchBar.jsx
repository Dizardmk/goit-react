import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form className="searchBar" onSubmit={this.handleSubmit}>
        <input
          className="searchBar__input"
          type="text"
          value={query}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className="searchBar__button" type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}
