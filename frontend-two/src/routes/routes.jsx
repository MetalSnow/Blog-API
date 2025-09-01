import App from '../App';
import Dashboard from '../components/dashboard/Dashboard';
import ErrorPage from '../error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];

export default routes;
