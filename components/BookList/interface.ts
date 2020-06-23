import { IBook } from "~/types";

export interface IProps {
  className?: string;
  books?: IBook[];
}

export const defaultProps = {
  className: "",
  books: [],
};

export interface IState {}
