import Comments from '../comments/Comments';

const Content = ({ data, id }) => {
  const article = data.filter((el) => el.id === Number(id))[0];
  console.log(article);

  return (
    <>
      <div>
        s<h2>{article.title}</h2>
        <p>{article.createdAt}</p>
        <p>{article.content}</p>
      </div>
      <div>
        <Comments postId={Number(id)} />
      </div>
    </>
  );
};

export default Content;
