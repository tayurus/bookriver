import React from "react";
import Link from "next/link";
import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { IProps } from "../interface";

export const renderLibrary = (props: IProps, b: Function) => {
  const myBooksOverlay = (
    <div className={b("overlay", { library: true })}>
      {new Array(10).fill(0).map((it, index) => (
        <React.Fragment key={index}>
          <Link href="/">
            <a className={b("label", { black: true })}>Новинки</a>
          </Link>
          <Link href="/">
            <a className={b("label", { black: true })}>Фантастика</a>
          </Link>
          <Link href="/">
            <a className={b("label", { black: true })}>Фэнтези</a>
          </Link>
          <Link href="/">
            <a className={b("label", { black: true })}>Любовные романы</a>
          </Link>
          {" "}
          <Link href="/">
            <a className={b("label", { black: true })}>Детектив</a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={b("library")}>
      <Dropdown overlay={myBooksOverlay} trigger={["click"]}>
        <div className={b("header-item-wrapper")}>
          <span className={b("label", { "header-item": true, black2: true, pointer: true })}>Библиотека</span>
          <FontAwesomeIcon icon={faSortDown} className={b("arrow")} />
        </div>
      </Dropdown>
    </div>
  );
};
