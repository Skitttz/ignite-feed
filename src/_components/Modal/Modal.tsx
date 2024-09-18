import React, { useRef, useEffect, useCallback } from 'react';
import styles from './Modal.module.css';
import { XCircle } from 'phosphor-react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <dialog className={styles.modal} open>
      <div ref={modalRef} className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <a
            href={''}
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className={styles.closeButton}
          >
            <XCircle size={32} />
          </a>
        </div>
        <div id="modal-content" className={styles.modalContentInner}>
          {children}
        </div>
      </div>
    </dialog>
  );
}
