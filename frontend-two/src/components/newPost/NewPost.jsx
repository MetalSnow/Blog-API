import { useEffect, useRef, useState } from 'react';
import TextEditor from './TextEditor';
import usePost from '../../hooks/usePost';
import styles from './NewPost.module.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const NewPost = () => {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [editorError, setEditorError] = useState(null);
  const {
    authenticate: upload,
    loading,
    error,
  } = usePost(`${API_BASE_URL}/posts`);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEditorError(null);

    const token = localStorage.getItem('token');

    const form = event.target;
    const formData = new FormData(form);

    if (editorRef.current) {
      const content = editorRef.current.getContent();

      const strippedContent = content.replace(/(<([^>]+)>)/gi, '').trim();
      const minTyped = 50;
      const isRequired = true;

      if (isRequired && strippedContent.length === 0) {
        setEditorError('This field is required.');
        return;
      }

      if (strippedContent.length < minTyped) {
        setEditorError(
          `Please enter at least ${minTyped} characters. You currently have ${strippedContent.length}.`
        );
        return;
      }

      formData.append('content', editorRef.current.getContent());
    }

    const formJson = Object.fromEntries(formData.entries());
    try {
      const response = await upload(formJson, token);
      setSuccessMsg(response.message);
      console.log(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={styles.container}>
      {error ? <p>{error.message}</p> : loading && <p>Uploading...</p>}
      {successMsg && <p>{successMsg} here.</p>}
      <form method="post" onSubmit={handleSubmit}>
        <div className={styles.title}>
          <input
            ref={inputRef}
            type="text"
            name="title"
            id="title"
            placeholder="Post Title"
            required
          />
          <button type="submit">Create Post</button>
        </div>

        {editorError && <div>{editorError}</div>}
        <TextEditor editorRef={editorRef} />
      </form>
    </div>
  );
};

export default NewPost;
