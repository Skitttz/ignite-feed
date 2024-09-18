import React, { createContext, useState } from 'react';
import { Toast } from '@components/Toast/Toast';
import { ProviderProps } from '@interfaces/provider';
import { toastTimer } from '@utils/constantsToast';
import { ToastProps } from '@interfaces/toast';
import styles from './ToastContext.module.css';

interface ToastContextType {
  showToast: ({ message, type }: ToastProps) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);
let toastId = 1;
export const ToastProvider = ({ children }: ProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = ({ message, type }: ToastProps) => {
    const id = toastId++;
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, toastTimer.timerStateToast);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast deve ser usado dentro do seu Provider');
  }
  return context;
};
