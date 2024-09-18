import { useEffect, useState } from 'react';
import styles from './Toast.module.css';
import { ToastProps } from '@interfaces/toast';
import { toastTimer } from '@utils/constantsToast';

export function Toast({ type, message }: ToastProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const timer = setTimeout(
      () => setShow(false),
      toastTimer.timerEndAnimation,
    );
    return () => clearTimeout(timer);
  }, []);
  const toastStyleClass = type === 'success' ? styles.success : styles.error;
  const showToastClass = show ? styles.show : '';
  return (
    <div className={`${styles.toast} ${toastStyleClass} ${showToastClass}`}>
      {type === 'success' ? (
        <span className={styles.icon}>✓</span>
      ) : (
        <span className={styles.icon}>⚠️</span>
      )}
      <span className={styles.message}>{message}</span>
    </div>
  );
}
