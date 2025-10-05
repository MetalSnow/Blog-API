import { CircleUserRound, ThumbsUp, Trash } from 'lucide-react';
import { useRef, useState } from 'react';
import useDelete from '../../hooks/useDelete';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Comment = ({ comment, styles, postId, setData, fetchData }) => {
  const [likes, setLikes] = useState(0);
  const ref = useRef(null);
  const deleteComment = useDelete(
    `${API_BASE_URL}/posts/${postId}/comments/${comment.id}`
  );

  const time = comment.timestamp.substring(11, 16);
  const date = comment.timestamp.split('T')[0];

  const handleLikeBtn = () => {
    if (likes === 0) {
      setLikes((like) => like + 1);
      ref.current.style = 'outline: 2px auto -webkit-focus-ring-color;';
    } else {
      setLikes((like) => like - 1);
      ref.current.style = 'outline: none;';
    }
  };

  const handleDeleteBtn = async () => {
    const token = localStorage.getItem('token');
    try {
      await deleteComment(token);
      const data = await fetchData();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <p className={styles.user}>
          <CircleUserRound size={40} strokeWidth={1.5} />
          {comment.email}
        </p>
        <p>
          {date} <br /> {time}
        </p>
      </div>
      <p>{comment.content}</p>
      <button className={styles.deleteBtn} onClick={handleDeleteBtn}>
        <Trash />
      </button>
      <button className={styles.likes} ref={ref} onClick={handleLikeBtn}>
        <span>{likes == 0 ? ' ' : likes}</span>
        <ThumbsUp size={20} strokeWidth={2.5} />
      </button>
    </>
  );
};

export default Comment;
