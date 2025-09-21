import App from '../App';
import Dashboard from '../components/dashboard/Dashboard';
import ErrorPage from '../error/ErrorPage';
import Post from '../components/post/Post';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard/:name?',
    element: <Dashboard />,
  },
  {
    path: '/posts/:id',
    element: <Post />,
  },
];

export default routes;
