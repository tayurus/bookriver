import { IBook, IChapter } from "~/types";

export interface IProps {
  className?: string;
  chaptersList?: any;
  bookInfo?: any;
}

export const defaultProps = {
  className: "",
  chaptersList: [],
  bookInfo: { author: {}, coauthors: [] },
};

export interface IState {
  isBookFormat: boolean;
  font: string;
  fontSize: number;
  fontSelectVisible: boolean;
  currentChapterIndex: number;
}
