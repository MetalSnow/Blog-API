import { useState, useCallback } from 'react';

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (token) => {
      setError(null);
      try {
        let response;
        if (token) {
          response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          response = await fetch(url);
        }

        if (response.status == 401) {
          throw new Error('You are not allowed to view this resources.');
        }

        if (response.status >= 400) {
          throw new Error('Server error occured!');
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
