import { Link } from 'react-router-dom';
import Header from '../header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <h2>Welcome to My Blog!</h2>
        <p>
          Hey there! 👋 This is where I share my thoughts, stories, and ideas.
          Whether it’s tech, life, or random musings, you’ll find a bit of
          everything here.
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
