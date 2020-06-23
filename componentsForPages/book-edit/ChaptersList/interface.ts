import { IChapter } from "~/types";

export interface IProps {
  className?: string;
  chapters?: IChapter[];
  bookId: number;
  changeChapterIndex?(chapter_id: number, newIndex: number): Promise<void>;
  getChaptersByBookID?(book_id: number): Promise<void>;
  deleteChapter?(chapter_id: number): Promise<void>;
}

export const defaultProps = {
  className: "",
  chapters: [],
};

export interface IState {}
