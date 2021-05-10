import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://fakerapi.it/api/v1/books?_locale=ru_RU',
    );
    this.setState({ books: data.data });
  }

  render() {
    const { books } = this.state;
    const { url } = this.props.match;

    return (
      <ul>
        {books.map(({ isbn, title, author }) => (
          <li key={isbn}>
            <Link to={`${url}/${isbn}`}>
              <p>{title}</p>
            </Link>
            <p>Автор: {author}</p>
            <br />
          </li>
        ))}
      </ul>
    );
  }
}
