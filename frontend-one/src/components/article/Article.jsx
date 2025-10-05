import useFetch from '../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import Content from './Content';
import styles from './Article.module.css';
import Header from '../header/Header';
import { LoaderCircle } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Article = () => {
  const { data, loading, error } = useFetch(`${API_BASE_URL}/posts`);

  const { id } = useParams();

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
                if (el.published) {
                  return (
                    <li key={el.id}>
                      Topic:
                      <Link to={`/articles/${el.id}`}> {el.title}</Link>
                    </li>
                  );
                }
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

export default Article;
