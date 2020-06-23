import { ColumnsType } from "antd/es/table";
import { IBookLog } from "~/types";

export interface IProps {
  className?: string;
  items: IBookLog[];
  current_page: number;
  per_page: number;
  total: number;
  getBookLog(book_id: number, page: number): Promise<void>;
  bookId: number;
}

export const defaultProps = {
  className: "",
};

export interface IState {}

export const tableColumns: ColumnsType = [
  {
    title: "Дата",
    dataIndex: "created_at",
    ellipsis: true,
  },
  {
    title: "Действие",
    dataIndex: "message",
    ellipsis: true,
  },
];
