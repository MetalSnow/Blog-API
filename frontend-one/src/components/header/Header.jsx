import { Link } from 'react-router-dom';
import { BookOpen, Newspaper, BookA } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Link to="/">
          <BookOpen size={45} />
          My Blog
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/articles">
            <Newspaper size={25} />
            Articles
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BookA size={25} />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
