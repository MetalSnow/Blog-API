import { Editor } from '@tinymce/tinymce-react';

const apiKey = import.meta.env.VITE_API_KEY;

const TextEditor = ({ editorRef }) => {
  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          placeholder: 'Describe your masterpiece...',
          height: 500,
          menubar: false,
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  );
};

export default TextEditor;
