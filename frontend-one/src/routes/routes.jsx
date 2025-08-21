import App from '../App.jsx';
import ErrorPage from '../../error/ErrorPage.jsx';
import Article from '../components/article/Article.jsx';
import About from '../components/about/About.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'articles/:id?',
    element: <Article />,
  },
  {
    path: 'about',
    element: <About />,
  },
];

export default routes;
