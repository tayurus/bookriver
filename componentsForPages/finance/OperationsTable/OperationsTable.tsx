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
const b = cn("operations-table");

export class OperationsTable extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, operations } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <div className={b("top")}>
          <div className={b("title")}>Операции</div>
          <div className={b("filters")} />
        </div>

        <Table columns={tableColumns} dataSource={operations} pagination={false} className={b("table")} />

        <div className={b("bottom")}>
          <span className={b("load-more")}>Показать следующие 50 операций</span>
        </div>
      </div>
    );
  }
}
