import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
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
    };
    fetchArticles();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
