import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookDetailPage extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <div>
        <h1> Book page '{params.bookId}'</h1>
        <br />
        <b>
          <Link to="/books">return back</Link>
        </b>
      </div>
    );
  }
}
