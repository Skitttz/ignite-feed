import { ToastProvider } from '@contexts/Toast/ToastContext';
import { ReactNode } from 'react';

export const ToastProviders = ({ children }: { children: ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
