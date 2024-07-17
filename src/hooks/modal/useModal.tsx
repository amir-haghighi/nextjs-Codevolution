// useModal.tsx (Custom Hook)
'use client';
import { useEffect, useState } from 'react';

import styles from './Modal.module.css';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  let onCloseCallback: (() => void) | null;
  const onClose = (callback: () => void) => {
    onCloseCallback = callback;
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    if (onCloseCallback) {
      onCloseCallback();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        (e.target as HTMLElement).classList.contains(styles.modalOverlay)
      ) {
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
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeModal}>
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return {
    isOpen,
    openModal,
    closeModal,
    ModalComponent,
    onClose,
  };
};

export default useModal;
