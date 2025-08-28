import { useState } from 'react';
import usePost from '../../hooks/usePost';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [token, setToken] = useState(null);
  const { authenticate, loading, error, validation } = usePost(
    'http://localhost:3000/user/log-in'
  );

  const loginUser = async (formData) => {
    'use server';
    const email = formData.get('email');
    const password = formData.get('password');
    const data = { email, password };
    try {
      const jsonToken = await authenticate(data);
      setToken(jsonToken);

      localStorage.setItem('token', jsonToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (error) return <p>Server error occured!</p>;
  return (
    <div className={styles.login}>
      <h1>Sign in</h1>
      {loading && <p>logging in...</p>}
      {validation && <p style={{ color: 'red' }}>{validation}</p>}
      <form action={loginUser}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
