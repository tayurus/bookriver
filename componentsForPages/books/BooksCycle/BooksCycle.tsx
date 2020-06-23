import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, IState, defaultProps } from "./interface";
import { ReactComponent as AddIcon } from "~/static/BooksCycle/add.svg";
import { ReactComponent as RemoveIcon } from "~/static/BooksCycle/trash.svg";
import { Status } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("books-cycle");

export class BooksCycle extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, title, booksCount, onBookCreateClick, onCycleDelete } = this.props;
    return (
      <div className={classNames(b(), className)}>
        <div className={b("preview")}>
          <div className={b("left")}>
            {/* <ArrowIcon className={b("arrow")} /> */}
            <div className={b("title")}>
              {title}
              <span className={b("title-brackets")}>
                (
                {booksCount}
                )
              </span>
            </div>
            <Status label="complete" />
          </div>

          <div className={b("right")}>
            <span className={b("add-btn")}>
              <AddIcon className={b("add-icon")} />
              <span className={b("add-btn-text")} onClick={onBookCreateClick}>
                Добавить книгу
              </span>
            </span>

            <RemoveIcon className={b("remove-btn")} onClick={onCycleDelete} />
          </div>
        </div>
      </div>
    );
  }
}
