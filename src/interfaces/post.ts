import { AuthorProps } from "./author";
import { DescriptionProps } from "./description";

export interface PostProps {
  id: number;
  author: AuthorProps;
  publishedAt: string;
  descriptions: DescriptionProps[];
}


export interface PostFormProps{
  handleCloseModal: () => void;
}