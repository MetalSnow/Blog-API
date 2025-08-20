import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Modal from '../Modal';
import { useFormStatus } from 'react-dom';
import usePost from '../../hooks/usePost';

const Comments = ({ url }) => {
  const [modal, setModal] = useState(false);
  const { data, loading, error, refetch } = useFetch(url);
  const { action, isLoading, error: submitError } = usePost(url);

  const handleClose = () => {
    setModal(false);
  };

  const submitData = async (formData) => {
    'use server';
    const email = formData.get('email');
    const content = formData.get('content');
    const postData = { email, content };

    try {
      await action(postData);
      setModal(false);
      await refetch();
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountred!</p>;
  return (
    <div>
      <button onClick={() => setModal(true)}>Share your thoughts</button>
      <Modal openModal={modal} closeModal={handleClose}>
        {isLoading && <p>Posting your comment...</p>}
        {submitError && (
          <p style={{ color: 'red' }}>Error: {submitError.message}</p>
        )}
        <form action={submitData}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="comment">Comment:</label>
          <input type="text" id="comment" name="content" />
          <Submit />
        </form>
      </Modal>
      <ul>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.email}</p>
              <p>{comment.timestamp}</p>
              <p>{comment.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
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
