import useFetch from '../../hooks/useFetch';

const Article = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h2>Articles</h2>
      <ul>
        {data.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Article;
