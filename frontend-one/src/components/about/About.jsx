import { ArrowBigLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <h2>About This Blog</h2>
        <p className={styles.para}>
          Welcome to my digital notebook. This is a playground for thoughts,
          built with a love for stories—even the fictional ones. The books,
          authors, and quotes you will see here are all generated, serving as
          prompts for real exploration and discussion. It's a testament to the
          fact that even made-up worlds can inspire genuine curiosity. This site
          itself is a personal project, crafted with simplicity in mind.
        </p>
        📁 See the code on GitHub:{' '}
        <a href="https://github.com/MetalSnow" target="_blank">
          Metal Snow
        </a>
        <p>Thanks for stopping by. — Saigou</p>
        <Link to="/">
          {' '}
          <ArrowBigLeft /> Home page
        </Link>
      </div>
    </>
  );
};

export default About;
