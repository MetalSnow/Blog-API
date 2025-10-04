import {
  BookMarked,
  BookOpen,
  CircleUser,
  LogOut,
  PencilLine,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ data }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className={styles.container}>
      <div>
        <h1>
          <BookOpen size={45} strokeWidth={3} />
          My Blog
        </h1>
        <ul>
          <li>
            <Link to="/dashboard">
              <BookMarked size={16} strokeWidth={2.75} /> Posts
            </Link>
          </li>
          <li>
            <Link to="/dashboard/new-post">
              <PencilLine size={16} strokeWidth={2.75} /> Create Post
            </Link>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <CircleUser size={28} />{' '}
          {data?.username ? data.username : 'MetalSnow'}
        </li>

        <li>
          <button onClick={handleLogOut}>
            Log Out <LogOut size={22} />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
