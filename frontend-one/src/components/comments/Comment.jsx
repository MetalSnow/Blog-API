import { CircleUserRound, ThumbsUp } from 'lucide-react';
import { useRef, useState } from 'react';

const Comment = ({ comment, styles }) => {
  const [likes, setLikes] = useState(0);
  const ref = useRef(null);

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
      <button className={styles.likes} ref={ref} onClick={handleLikeBtn}>
        <span>{likes == 0 ? ' ' : likes}</span>
        <ThumbsUp size={20} strokeWidth={2.5} />
      </button>
    </>
  );
};

export default Comment;
