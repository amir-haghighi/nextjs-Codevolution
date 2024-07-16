// useModal.js (Custom Hook)

import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleOutsideClick = (e) => {
      if (isOpen && e.target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const ModalComponent = ({ children }: { children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
      <div className='modal-overlay' onClick={closeModal}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          <button className='modal-close' onClick={closeModal}>
            Close
          </button>
          <div className='modal-content'>{children}</div>
        </div>
      </div>
    );
  };

  return {
    isOpen,
    openModal,
    closeModal,
    ModalComponent,
  };
};

export default useModal;
