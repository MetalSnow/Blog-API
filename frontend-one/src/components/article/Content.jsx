import Comments from '../comments/Comments';

const Content = ({ data, id }) => {
  const article = data.filter((el) => el.id === Number(id))[0];
  const url = `http://localhost:3000/posts/${Number(id)}/comments`;

  return (
    <>
      <div>
        s<h2>{article.title}</h2>
        <p>{article.createdAt}</p>
        <p>{article.content}</p>
      </div>
      <div>
        <Comments url={url} />
      </div>
    </>
  );
};

export default Content;
