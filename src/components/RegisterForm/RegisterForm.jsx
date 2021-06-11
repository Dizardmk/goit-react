import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import './RegisterForm.scss';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const handleChangeName = useCallback(event => {
    setName(event.target.value);
  }, []);

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
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>
          <span className="registerForm__title">Name</span>
          <input
            className="registerForm__input"
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
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
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
          />
        </label>
        <button className="registerForm__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
