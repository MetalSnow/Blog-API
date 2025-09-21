import { Link, useParams } from 'react-router-dom';
import Content from './Content';
import styles from './Post.module.css';
import Header from '../header/Header';
import { LoaderCircle } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Post = () => {
  const { fetchData, loading, error } = useFetch(`${API_BASE_URL}/posts`);
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchData(id);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, [fetchData, id]);

  if (error) return <p>A network error was encountered</p>;
  return (
    <>
      <Header />
      <div className={styles.container}>
        {loading ? (
          <LoaderCircle size={30} strokeWidth={2.5} className={styles.loader} />
        ) : !id ? (
          <>
            <h2>Articles</h2>
            <ul>
              {data.map((el) => {
                return (
                  <li key={el.id}>
                    Topic:
                    <Link to={`/articles/${el.id}`}> {el.title}</Link>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <Content data={data} id={id} />
        )}
      </div>
    </>
  );
};

export default Post;
