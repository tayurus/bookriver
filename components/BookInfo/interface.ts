import { IBook } from "~/types";

export interface IProps extends IBook {
  className?: string;
  imgUrl?: string;
  title?: string;
  publishDate?: string;
  charactersCount?: number | string;
  commentsCount?: number | string;
  readersCount?: number | string;
  alreadyReadCount?: number | string;
  willReadCount?: number | string;
  viewsCount?: number | string;
  recommendCount?: number | string;
}

export const defaultProps = {
  className: "",
  imgUrl: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  title: "Без названия",
  publishDate: "??.??.????",
  symbols: "?",
  commentsCount: "?",
  readersCount: "?",
  alreadyReadCount: "?",
  willReadCount: "?",
  viewsCount: "?",
  recommendCount: "?",
};
