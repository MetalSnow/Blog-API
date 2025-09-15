import { useState } from 'react';

const usePost = (url) => {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(null);

  const authenticate = async (data, token) => {
    setError(null);
    setValidation(null);
    setLoding(true);
    try {
      console.log(data);
      console.log(token);
      let response;
      if (token) {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      }

      console.log(response);

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
      if (result.token) {
        return result.token;
      }
      return result;
    } catch (err) {
      setError(err);
    }
  };

  return { authenticate, loading, error, validation };
};

export default usePost;
