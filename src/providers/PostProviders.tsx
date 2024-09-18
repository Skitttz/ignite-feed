import { ReactNode } from 'react';
import { PostProvider } from '@contexts/PostContext';

export const PostProviders = ({ children }: { children: ReactNode }) => {
  return <PostProvider>{children}</PostProvider>;
};
