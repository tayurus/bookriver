import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps } from "./../interface";
import Link from "next/link";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("modal-buy-book");




export const BookInfoModal = ({ className, title, coAuthors, id, image, final }: IProps) => {

  const coAuthorsArray = coAuthors.map<React.ReactNode>((author, i) => (
    <a className={b("book-info-co-author-link")} key={i} href={author.link}>
      {author.name}
    </a>
  ));

  return (
    <div className={(b("book-info", { final }))}>
      <div className={b("book-info-image")}>
        <img src={image} alt={image} />
      </div>
      <div className={b("book-info-info")}>
        <Link href={`book/${id}`}>
          <a className={b("book-info-title")}>{title}</a>
        </Link>

        <div className={b("book-info-co-author")}>{coAuthorsArray}</div>
      </div>
    </div>
  );
}


BookInfoModal.defaultProps = defaultProps;
