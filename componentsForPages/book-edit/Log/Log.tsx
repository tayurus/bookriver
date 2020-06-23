import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Table } from "antd";
import { IProps, defaultProps, IState, tableColumns } from "./interface";
import { getBookLog } from "~/redux/books";
import { connect } from "react-redux";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-edit-log");

class Log extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, current_page, items, per_page, total, bookId, getBookLog } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <Table
          columns={tableColumns}
          dataSource={items.map((it) => ({
            ...it,
            created_at: `${new Date(it.created_at).toLocaleDateString()} ${new Date(
              it.created_at
            ).toLocaleTimeString()}`,
          }))}
          pagination={{
            current: current_page,
            pageSize: per_page,
            total,
            onChange: (page: number) => getBookLog(bookId, page),
          }}
          className={b("table")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    currentBookLog: { current_page, items, per_page, total },
    currentBook: { id: bookId },
  } = state.books;
  return { current_page, items, per_page, total, bookId };
};

const mapDispatchToProps = (dispatch) => ({
  getBookLog: (book_id: number, page: number) => dispatch(getBookLog(book_id, page)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Log);

export { connectedComponent as Log };
