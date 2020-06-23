import { ColumnsType } from "antd/es/table";
import { IFinanceOperation } from "~/types/FinanceOperation";

export interface IProps {
  className?: string;
  operations: IFinanceOperation[];
}

export const defaultProps = {
  className: "",
  operations: [],
};

export interface IState {}

export const tableColumns: ColumnsType = [
  {
    title: "Дата и время",
    dataIndex: "date",
    ellipsis: true,
  },
  {
    title: "ID",
    dataIndex: "id",
    ellipsis: true,
  },
  {
    title: "Книга",
    dataIndex: "book",
    ellipsis: true,
  },
  {
    title: "Тип",
    dataIndex: "type",
    ellipsis: true,
  },
  {
    title: "Сумма",
    dataIndex: "sum",
    ellipsis: true,
  },
];
