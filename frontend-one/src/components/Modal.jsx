import { SquareX } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>
        <SquareX size={29} />
      </button>
    </dialog>
  );
}

export default Modal;
