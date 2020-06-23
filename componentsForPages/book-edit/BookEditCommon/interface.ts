import { PUBLISHED_STATUS, COMPLETE_STATUS } from "~/types";

export interface IProps {
  className?: string;
  name?: string;
  bookId?: number;
  readersCount?: number | string;
  alreadyReadCount?: number | string;
  willReadCount?: number | string;
  viewsCount?: number | string;
  status_publish: PUBLISHED_STATUS;
  status_complete: COMPLETE_STATUS;
  renameBook?(bookId: number, newName: string): void;
  deleteBook?(bookId: number): Promise<void>;
  changePublishStatusBook?(bookId: number, newStatus: string): Promise<void>;
  changeCompleteStatusBook?(bookId: number, newStatus: string): Promise<void>;
  getBook?(book_id: number): void;
  formValid?: boolean;
  onSubmit?(): void;
  handleSubmit?(): void;
}

export const defaultProps = {
  className: "",
  name: "Без названия",
  readersCount: "?",
  alreadyReadCount: "?",
  willReadCount: "?",
  viewsCount: "?",
};

export interface IState {
  isTitleEdit: boolean;
}

export const getInitialValues = (data) => ({
  name: data.name,
});
