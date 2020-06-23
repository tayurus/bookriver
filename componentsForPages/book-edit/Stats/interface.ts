import { ColumnsType } from "antd/es/table";

export interface IProps {
  className?: string;
}

export const defaultProps = {
  className: "",
};

export interface IState {}

export const tableColumns: ColumnsType = [
  {
    title: "Дата",
    dataIndex: "date",
    ellipsis: true,
    // align: "right",
  },
  {
    title: "Награды",
    dataIndex: "reward",
    ellipsis: true,
    // align: "right",
  },
  {
    title: "Продажи",
    dataIndex: "sales",
    ellipsis: true,
    // align: "right",
  },
  {
    title: "Прочтения",
    dataIndex: "readCount",
    ellipsis: true,
    // align: "right",
  },

  {
    title: "Добавления в библиотеку",
    ellipsis: true,
    dataIndex: "addsToLibrary",
    width: 220,
    // align: "right",
  },
  {
    title: "Комментарии",
    dataIndex: "comments",
    ellipsis: true,
    // align: "right",
  },
];
