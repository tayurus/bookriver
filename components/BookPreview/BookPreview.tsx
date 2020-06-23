import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import Link from "next/link";
import { defaultProps, IProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-preview");

export const BookPreview = ({
  className,
  imgUrl,
  author,
  title,
  price,
  oldPrice,
  eventTitle,
  eventDescription,
  withTitle,
  withAuthor,
  withPrice,
  withOldPrice,
  withEventTitle,
  withDescription,
  isAudio,
}: IProps) => (
  <Link href="#">
    <a className={classNames(b(), className)}>
      <img src={imgUrl} alt="превью книги" className={b("image")} />
      <div className={b("info")}>
        {withTitle && <div className={b("title")}>{title}</div>}
        {withAuthor && <div className={b("author")}>{author}</div>}

        {withEventTitle && <div className={b("event-title")}>{eventTitle}</div>}
        {withDescription && <div className={b("event-description")}>{eventDescription}</div>}
      </div>

      <div className={b("price-wrapper")}>
        {withPrice && (
        <div className={b("price")}>
          {price}
          {' '}
          ₽
        </div>
        )}
        {withOldPrice && (
        <div className={b("price", { old: true })}>
          {oldPrice}
          {' '}
          ₽
        </div>
        )}
      </div>
    </a>
  </Link>
);

BookPreview.defaultProps = defaultProps;
