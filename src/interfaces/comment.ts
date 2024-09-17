export interface CommentProps{
  commentText: string;
  removeComment: (text:string) => void;
}

export interface CommentFormProps {
  comments: string[];
  setComments: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CommentListProps{
  comments: string[];
  setComments: React.Dispatch<React.SetStateAction<string[]>>;
}