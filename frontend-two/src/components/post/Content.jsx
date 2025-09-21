// import Comments from '../comments/Comments';
import styles from './Post.module.css';
import DOMPurify from 'dompurify';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Content = ({ data, id }) => {
  const article = data.filter((el) => el.id === Number(id))[0];
  // const url = `${API_BASE_URL}/posts/${Number(id)}/comments`;

  return (
    <>
      <div className={styles.content}>
        <h2>{article.title}</h2>
        <p className={styles.date}>{article.createdAt.split('T')[0]}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.content),
          }}
        ></div>
      </div>

      {/* <Comments url={url} /> */}
    </>
  );
};

export default Content;
