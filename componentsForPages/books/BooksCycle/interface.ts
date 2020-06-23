export interface IProps {
  className?: string;
  title?: string;
  booksCount?: number;
  onBookCreateClick(): void;
  onCycleDelete(): void;
}
export interface IState {
  open: boolean;
}

export const defaultProps = {
  className: "",
  title: "Цикл без названия",
  books: [],
};
