import Link from "next/link";
import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IProps } from "../interface";

export const renderMyBooks = (props: IProps, b: Function) => {
  const myBooksOverlay = (
    <div className={b("overlay", { "my-books": true })}>
      <Link href="/">
        <a className={b("label", { black2: true, "my-book": true })}>Читаю</a>
      </Link>
      <Link href="/">
        <a className={b("label", { black2: true, "my-book": true })}>Прочитано</a>
      </Link>
      <Link href="/">
        <a className={b("label", { black2: true, "my-book": true })}>Хочу прочитать</a>
      </Link>
      <Link href="/">
        <a className={b("label", { black2: true, "my-book": true })}>Просмотренные</a>
      </Link>
    </div>
  );

  return (
    <div className={b("my-books")}>
      <Dropdown overlay={myBooksOverlay} trigger={["click"]}>
        <div className={b("header-item-wrapper")}>
          <span className={b("label", { "header-item": true, black2: true, pointer: true })}>Мои книги</span>
          <FontAwesomeIcon icon={faSortDown} className={b("arrow")} />
        </div>
      </Dropdown>
    </div>
  );
};
