import { Link } from 'react-router-dom';
import { BookOpen, Newspaper, BookA } from 'lucide-react';

const Header = () => {
  return (
    <div>
      <h1>
        <BookOpen size={45} />
        <Link to="/">My Blog</Link>
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
