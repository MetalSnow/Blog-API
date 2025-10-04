import { useState } from 'react';
import styles from './Dashboard.module.css';
import usePatch from '../../hooks/usePatch';
import { Loader2Icon } from 'lucide-react';

const PublishedInput = ({ post, url }) => {
  const [isPublished, setIsPublished] = useState(post.published);
  const { update, loading, error } = usePatch(`${url}/posts/${post.id}`);

  const handleChange = async (event) => {
    try {
      if (event.target.checked) {
        setIsPublished(true);
        await update({ published: true });
      } else {
        setIsPublished(false);
        await update({ published: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <p>{error.message}</p>;

  return (
    <div className={styles.status}>
      <label className={styles.switch} htmlFor={`publish-${post.id}`}>
        <input
          type="checkbox"
          name={`publish-${post.id}`}
          id={`publish-${post.id}`}
          onChange={handleChange}
          checked={isPublished}
        />
        <span className={styles.slider}></span>
      </label>
      <p style={isPublished ? { color: '#65c676' } : { color: '#f07676' }}>
        {loading ? <Loader2Icon /> : isPublished ? 'Published' : 'Unpublished'}
      </p>
    </div>
  );
};

export default PublishedInput;
