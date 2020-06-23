import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState } from "./interface";
import { IBook } from "~/types";
import { BookCard } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-list");

export class BookList extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, books } = this.props;

    return (
      <div className={classNames(b(), className)}>
        {books.map((it: IBook, index: number) => (
          <BookCard className={b("book")} {...it} key={`author-cycle-book-${index}`} />
        ))}
      </div>
    );
  }
}
