import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Header from '../header/Header';
import PublishedInput from './PublishedInput';
import { useParams } from 'react-router-dom';
import NewPost from '../newPost/NewPost';
// import styles from './Dashboard.module.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  const { loading, error, fetchData } = useFetch(`${API_BASE_URL}/user`);
  const {
    loading: postLoading,
    error: postError,
    fetchData: fetchPostData,
  } = useFetch(`${API_BASE_URL}/posts`);

  const { name } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const [userInfo, posts] = await Promise.all([
          fetchData(token),
          fetchPostData(),
        ]);
        console.log(userInfo);
        console.log(posts);

        setUserData(userInfo);
        setPostData(posts);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, [fetchData, fetchPostData]);

  if (error) return <p>{error.message}</p>;
  if (postError) return <p>{postError.message}</p>;
  console.log('user loding', loading);
  console.log('posts loding', postLoading);
  console.log(userData);

  return (
    <>
      {!loading && !postLoading ? (
        <>
          <Header data={userData} />
          {name === 'new-post' ? (
            <NewPost />
          ) : (
            <div>
              <h2>Posts</h2>
              <ul>
                {postData.map((post) => (
                  <li key={post.id}>
                    <p>{post.title}</p>
                    <PublishedInput post={post} url={API_BASE_URL} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Dashboard;
