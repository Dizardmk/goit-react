import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import './RegisterForm.scss';

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="register">
        <h1 className="register__title">Register</h1>
        <form className="registerForm" onSubmit={this.handleSubmit}>
          <label>
            <span className="registerForm__title">Name</span>
            <input
              className="registerForm__input"
              required
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span className="registerForm__title">Email</span>
            <input
              className="registerForm__input"
              required
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span className="registerForm__title">Password</span>
            <input
              className="registerForm__input"
              required
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className="registerForm__button" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
