import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import './LoginForm.scss';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const handleChangeEmail = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  const [password, setPassword] = useState('');
  const handleChangePassword = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(login({ email, password }));
      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <span className="loginForm__title">Email</span>
          <input
            className="loginForm__input"
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
          />
        </label>
        <button className="loginForm__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
