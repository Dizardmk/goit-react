import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import './LoginForm.scss';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <h1 className="login__title">Login</h1>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label>
            <span className="loginForm__title">Email</span>
            <input
              className="loginForm__input"
              required
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span className="loginForm__title">Password</span>
            <input
              className="loginForm__input"
              required
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className="loginForm__button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
