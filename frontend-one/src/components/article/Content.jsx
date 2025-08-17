const Content = ({ data, id }) => {
  const article = data.filter((el) => el.id === Number(id))[0];
  console.log(article);

  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.createdAt}</p>
      <p>{article.content}</p>
    </>
  );
};

export default Content;
