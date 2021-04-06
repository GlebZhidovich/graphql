import { useLogin } from './hooks/useLogin';
import { useEffect } from 'react';

const saveToken = (token) => {
  localStorage.setItem('token', token);
}

export const Login = () => {

  const { logIn, handleChange, token } = useLogin();

  const handleSubmit = (event) => {
    logIn();
    event.preventDefault();
  }

  useEffect(() => {
    if (token) {
      saveToken(token);
    }
  }, [token]);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          id="username"
          type="text"
          name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          id="password"
          type="text"
          name="password" />
        <br />

        <button type="submit">
          Enter
        </button>
      </form>
    </>
  )
}
