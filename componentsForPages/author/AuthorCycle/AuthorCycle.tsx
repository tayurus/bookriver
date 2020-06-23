import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Divider } from "antd";
import { IProps, defaultProps, IState } from "./interface";
import { Status, BookList } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("author-cycle");

export class AuthorCycle extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      cycle: { name, books, status },
    } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <Divider />
        <div className={b("cycle-wrapper")}>
          <span className={b("cycle-label")}>Цикл</span>
          <span className={b("cycle-title")}>{name}</span>
          <span className={b("cycle-label")}>
            (
            {books.length}
            )
          </span>
          <Status className={b("cycle-status")} label={status} />
        </div>

        <BookList books={books} />
      </div>
    );
  }
}
