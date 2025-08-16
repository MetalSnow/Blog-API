import App from '../App.jsx';
import ErrorPage from '../../error/ErrorPage.jsx';
import Article from '../components/article/Article.jsx';

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
];

export default routes;
