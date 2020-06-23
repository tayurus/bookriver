import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Table } from "antd";
import { IProps, defaultProps, IState, tableColumns } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-edit-stats");

const tableData = [
  {
    date: "Март, 2020",
    reward: "45 678",
    sales: "45 678",
    readCount: "45 678",
    addsToLibrary: "45 678",
    comments: "45 678",
  },
  {
    date: "Март, 2020",
    reward: "45 678",
    sales: "45 678",
    readCount: "45 678",
    addsToLibrary: "45 678",
    comments: "45 678",
  },
  {
    date: "Март, 2020",
    reward: "45 678",
    sales: "45 678",
    readCount: "45 678",
    addsToLibrary: "45 678",
    comments: "45 678",
  },
  {
    date: "Март, 2020",
    reward: "45 678",
    sales: "45 678",
    readCount: "45 678",
    addsToLibrary: "45 678",
    comments: "45 678",
  },
];

export class Stats extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <div className={b("chart")}>Тут будет график</div>
        <Table columns={tableColumns} dataSource={tableData} pagination={false} className={b("table")} />
      </div>
    );
  }
}
