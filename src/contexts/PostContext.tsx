import React, { createContext, useState, useContext } from 'react';
import { ProviderProps } from '@interfaces/provider';
import postsDB from '../db.json';
import { PostProps } from '@interfaces/post';
import { orderPostByDate } from '@utils/orderPostByDate';

interface PostsContextType {
  posts: PostProps[];
  addPost: (newPost: PostProps) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostProvider: React.FC<ProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<PostProps[]>(orderPostByDate(postsDB));

  const addPost = (newPost: PostProps) => {
    setPosts((prevPosts) => orderPostByDate([...prevPosts, newPost]));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts deve ser usado dentro do seu Provider');
  }
  return context;
};
