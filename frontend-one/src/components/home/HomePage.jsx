import { Link } from 'react-router-dom';
import Header from '../header/Header';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <h2>Welcome to My Blog!</h2>
        <p className={styles.intro}>
          Hey there! 👋 This is where I share my literary adventures and deep
          dives. Whether it's Joyce's Dublin, Poe's macabre tales, or Dahl's
          chocolate factory, you'll find passionate discussions of timeless
          stories here.
        </p>
        <ul>
          <li>
            <Link to="/articles">📖 Latest Posts</Link> → Check out what's new!
          </li>
          <li>
            <Link to="/about">✍️ About Me</Link> → Get to know the writer behind
            the words.
          </li>
          <li>
            <Link to="/articles">💬 Want to chat?</Link> → Leave a comment on
            any post!
          </li>
        </ul>
        <p>Happy reading!</p>
      </div>
    </>
  );
};

export default HomePage;
