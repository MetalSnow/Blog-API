import usePost from '../../hooks/usePost';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LoginPage = () => {
  const navigate = useNavigate();
  const { authenticate, loading, error, validation } = usePost(
    `${API_BASE_URL}/user/log-in`
  );

  const loginUser = async (formData) => {
    'use server';
    const email = formData.get('email');
    const password = formData.get('password');
    const data = { email, password };
    try {
      const jsonToken = await authenticate(data);
      if (jsonToken) {
        localStorage.setItem('token', jsonToken);
        navigate('/dashboard');
      }
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
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
