import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Modal from '../modal/Modal';
import { useFormStatus } from 'react-dom';
import usePost from '../../hooks/usePost';
import { LoaderCircle } from 'lucide-react';
import styles from './Comments.module.css';
import Comment from './Comment';

const Comments = ({ url, postId }) => {
  const [modal, setModal] = useState(false);
  const { loading, error, fetchData } = useFetch(url);
  const { authenticate: action, isLoading, error: submitError } = usePost(url);
  const [data, setData] = useState(null);

  const handleClose = () => {
    setModal(false);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [fetchData]);

  const submitData = async (formData) => {
    'use server';
    const email = formData.get('email');
    const content = formData.get('content');
    const postData = { email, content };

    try {
      await action(postData);
      setModal(false);
      const data = await fetchData();
      setData(data);
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  if (error) return <p>A network error was encountred!</p>;
  return (
    <>
      {loading ? (
        <LoaderCircle size={30} strokeWidth={2.5} className={styles.loader} />
      ) : (
        <>
          <button onClick={() => setModal(true)}>Share your thoughts</button>
          <Modal openModal={modal} closeModal={handleClose}>
            {isLoading && <p>Posting your comment...</p>}
            {submitError && (
              <p style={{ color: 'red' }}>Error: {submitError.message}</p>
            )}
            <form action={submitData}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <label htmlFor="comment">Comment:</label>
              <textarea
                type="text"
                id="comment"
                name="content"
                placeholder="Write your thoughts.."
                required
              />
              <Submit />
            </form>
          </Modal>
          <div className={styles.comments}>
            <ul>
              {data.map((comment) => (
                <li key={comment.id}>
                  <Comment
                    comment={comment}
                    styles={styles}
                    postId={postId}
                    setData={setData}
                    fetchData={fetchData}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export default Comments;
