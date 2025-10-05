import { FolderX } from 'lucide-react';
import useDelete from '../../hooks/useDelete';
import styles from './Dashboard.module.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DeleteButton = ({ postId, fetchPostData, setPostData }) => {
  const deletePost = useDelete(`${API_BASE_URL}/posts/${postId}`);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      await deletePost(token);
      const data = await fetchPostData();
      setPostData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className={styles.deletePostBtn} onClick={handleDelete}>
      <FolderX size={20} />
      Delete
    </button>
  );
};

export default DeleteButton;
