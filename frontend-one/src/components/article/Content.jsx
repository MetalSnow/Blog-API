import Comments from '../comments/Comments';
import styles from './Article.module.css';

const Content = ({ data, id }) => {
  const article = data.filter((el) => el.id === Number(id))[0];
  const url = `http://localhost:3000/posts/${Number(id)}/comments`;

  return (
    <>
      <div className={styles.content}>
        <h2>{article.title}</h2>
        <p className={styles.date}>{article.createdAt.split('T')[0]}</p>
        <p>{article.content}</p>
      </div>

      <Comments url={url} />
    </>
  );
};

export default Content;
