import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [data, setData] = useState(null);
  const { loading, error, fetchData } = useFetch(`${API_BASE_URL}/user`);

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const data = await fetchData(token);
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, [fetchData]);

  if (error) return <p>Server error occured!</p>;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <header>
          <h1>Welcome {data.username} </h1>
        </header>
      )}
    </>
  );
};

export default Dashboard;
