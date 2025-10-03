import { useCallback } from 'react';

const useDelete = (url) => {
  const deleteComment = useCallback(
    async (token) => {
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status == 401) {
          throw new Error('You are not allowed to edit this resources.');
        }

        if (response.status >= 400) {
          throw new Error('Server error occured!');
        }

        const resData = await response.json();

        return resData;
      } catch (err) {
        console.error(err);
      }
    },
    [url]
  );

  return deleteComment;
};

export default useDelete;
