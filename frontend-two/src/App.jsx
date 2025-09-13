import { useNavigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/dashboard', { replace: true });
    } else {
      setIsCheckingAuth(false);
    }
  }, [navigate]);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  return <LoginPage />;
}

export default App;
