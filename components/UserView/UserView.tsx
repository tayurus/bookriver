import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IUserViewProps, defaultProps } from "./interface";
import { ReactComponent as BooksIcon } from "~/static/UserView/books.svg";
import { ReactComponent as SubsIcon } from "~/static/UserView/subs.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("user-view");

export const UserView = ({ className, horizont, isSubscribers, booksNum, subNum, userInfo }: IUserViewProps) => {
  const { photo_url, name, status } = userInfo;
  return (
    <div className={classNames(b({ horizontal: horizont }), className)}>
      <div className={b("top")}>
        <div className={b("avatar")}>
          <img src={photo_url} alt={photo_url} />
        </div>
        <div className={b("group-info")}>
          <div className={b("name")}>{name}</div>
          <div className={b("last-seen")}>Был на сайте неизвестно</div>
          <div className={b("stat-wrap")}>
            <div className={b("subscribers")}><BooksIcon /> <span>{booksNum}</span></div>
            <div className={b("subscribers")}><SubsIcon /> <span>{subNum}</span></div>
          </div>
        </div>
      </div>
      <div className={b("bottom")}>
        <div className={b("quote")}>{status}</div>
      </div>
    </div>
  );
};

UserView.defaultProps = defaultProps;
