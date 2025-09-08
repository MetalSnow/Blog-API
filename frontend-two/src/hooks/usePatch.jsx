import { useState } from 'react';

const usePatch = (url) => {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const update = async (data) => {
    setError(null);
    setLoding(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status code:${response.status} `);
      }

      const result = await response.json();
      setLoding(false);
      console.log(result.message);
    } catch (err) {
      setError(err);
    }
  };

  return { update, loading, error };
};

export default usePatch;
