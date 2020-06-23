import React, { useState } from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps } from "./interface";
import { BookCover, Button } from "~/components";
import { ReactComponent as WantReadIcon } from "~/static/BookCard/want-read.svg";
import { ReactComponent as LikeIcon } from "~/static/BookCard/like.svg";
import { ReactComponent as DislikeIcon } from "~/static/BookCard/dislike.svg";
import { ReactComponent as ReadIcon } from "~/static/BookCard/read.svg";
import { ReactComponent as CollectionsIcon } from "~/static/BookCard/collections.svg";
import { ReactComponent as MyBookIcon } from "~/static/BookCard/my-book.svg";
import Router from "next/router";
import { pages } from "~/constants/pages";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("book-card");

export const BookCard = ({ className, cover_url, authorBook, name, descBook, id }: IProps) => {
  const [open, toggleOpen] = useState(false);

  return (
    <div className={classNames(b(), className)}>
      <div className={b("cover-wrap")}>
        <BookCover imgUrl={cover_url && `${cover_url}?w=150&h=300`} />
      </div>
      <div className={b("info-wrap")}>
        <div className={b("title")}>{name}</div>
        <div className={b("author")}>{authorBook}</div>
      </div>
      <div className={b("hover-wrap")}>
        <div className={b("hover-btn-wrap")}>
          <Button className={b("read-book-btn")}>
            <CollectionsIcon />
          </Button>
          <div className={b("hover-menu-wrap")}>
            <Button onClick={() => toggleOpen(!open)} className={b("my-book-btn")}>
              <MyBookIcon />
            </Button>
            <div className={b("hover-menu", { open })}>
              <ul className={b("hover-menu-list")}>
                <li className={b("hover-menu-item")}>
                  <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                    <WantReadIcon />
                    <span>Хочу прочитать</span>
                  </a>
                </li>
                <li className={b("hover-menu-item")}>
                  <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                    <LikeIcon />
                    <span>Читал, нравится</span>
                  </a>
                </li>
                <li className={b("hover-menu-item")}>
                  <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                    <DislikeIcon />
                    <span>Читал, не нравится</span>
                  </a>
                </li>
                <li className={b("hover-menu-item")}>
                  <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                    <ReadIcon />
                    <span>Читаю</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Button
            block
            className={b("hover-btn")}
            onClick={() => Router.push(`${pages.reader}/[bookId]`, `${pages.reader}/${id}`)}
          >
            Читать книгу
          </Button>
        </div>
        <div className={b("hover-title")}>{name}</div>
        <div className={b("hover-author")}>{authorBook}</div>
        <div className={b("hover-desc")}>{descBook}</div>
      </div>
    </div>
  );
};

BookCard.defaultProps = defaultProps;
