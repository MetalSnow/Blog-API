import { useCallback } from 'react';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchArticles = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(url);
      if (response.status >= 400) {
        throw new Error('server error!');
      }

      const resData = await response.json();

      setData(resData.data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return { data, loading, error, refetch: fetchArticles };
};

export default useFetch;
