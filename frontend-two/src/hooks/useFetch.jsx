import { useState, useCallback } from 'react';

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (token) => {
      setError(null);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status >= 400) {
          throw new Error('server error!');
        }

        const resData = await response.json();

        setLoading(false);
        return resData.data;
      } catch (err) {
        setError(err);
      }
    },
    [url]
  );

  return { loading, error, fetchData };
};

export default useFetch;
