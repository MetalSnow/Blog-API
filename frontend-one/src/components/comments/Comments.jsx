import useFetch from '../../hooks/useFetch';

const Comments = ({ postId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/posts/${postId}/comments`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountred!</p>;
  return (
    <div>
      <ul>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.email}</p>
              <p>{comment.timestamp}</p>
              <p>{comment.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
