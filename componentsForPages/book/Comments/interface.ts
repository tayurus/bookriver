import { ICommentCreate } from "~/types";

export interface IProps {
  className?: string;
  getComments(target_class: string, target_id: number): Promise<any>;
  addComment(commentData: ICommentCreate): Promise<any>;
  comments: any[];
  bookId: number;
}

export const defaultProps = {
  className: "",
  comments: [],
};

export interface IState {
  commentText: string;
}
