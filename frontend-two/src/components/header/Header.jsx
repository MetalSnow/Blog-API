import { BookOpen, CircleUser, LogOut } from 'lucide-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Header = ({ data }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header>
      <h1>
        <Link to="/dashboard">
          <BookOpen size={45} />
          My Blog
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/dashboard">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard/new-post">Create Post</Link>
        </li>
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
