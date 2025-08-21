import useFetch from '../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import Content from './Content';
import { ArrowBigLeft } from 'lucide-react';
import Header from '../header/Header';

const Article = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/posts');

  const { id } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <>
      <Header />
      {!id ? (
        <div>
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
        </div>
      ) : (
        <Content data={data} id={id} />
      )}
    </>
  );
};

export default Article;
