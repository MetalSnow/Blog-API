import { useRef, useState } from 'react';
import TextEditor from './TextEditor';

const NewPost = () => {
  const editorRef = useRef(null);
  const [editorError, setEditorError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setEditorError(null);

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
    console.log(formJson);
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder="Post Title" />
        {editorError && <div>{editorError}</div>}
        <TextEditor editorRef={editorRef} />
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default NewPost;
