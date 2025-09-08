import { useState } from 'react';

const usePost = (url) => {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(null);

  const authenticate = async (data) => {
    setError(null);
    setValidation(null);
    setLoding(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 500) {
        throw new Error(`HTTP error! status code:${response.status} `);
      }

      if (response.status === 401) {
        const result = await response.json();
        setValidation(result.error);
        setLoding(false);
        return;
      }

      const result = await response.json();
      setLoding(false);
      return result.token;
    } catch (err) {
      setError(err);
    }
  };

  return { authenticate, loading, error, validation };
};

export default usePost;
