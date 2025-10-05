import Comments from '../comments/Comments';
import styles from './Article.module.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Content = ({ data, id }) => {
  const article = data.filter((el) => el.id === Number(id))[0];
  const url = `${API_BASE_URL}/posts/${Number(id)}/comments`;

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
