import { ICycle } from "~/types";

export interface IProps {
  className?: string;
  cycle: ICycle;
}

export const defaultProps = {
  className: "",
  cycle: {
    title: "Неизвестный цикл",
    books: [],
    status: "unknown",
  },
};

export interface IState {}
