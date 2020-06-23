import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import Link from "next/link";
import { IAuthorBookProps, defaultProps } from "./interface";
import { Status } from "~/components";
import { ReactComponent as ReadIcon } from "~/static/AuthorBook/read.svg";
import { ReactComponent as ReviewIcon } from "~/static/AuthorBook/review.svg";
import { ReactComponent as ViewIcon } from "~/static/AuthorBook/view.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("author-book");

export const AuthorBook = ({
  className,
  title,
  id,
  coAuthors,
  genres,
  pagesCount,
  pagesAddCount,
  image,
  viewsCount,
  reviewsCount,
  readCount,
}: IAuthorBookProps) => {
  const coAuthorsArray = coAuthors.map<React.ReactNode>((author, i) => (
    <a className={b("co-author-link")} key={`coAuthorsArray-${i}`} href={author.link}>
      {author.name}
    </a>
  ));

  const coGenresArray = genres.map<React.ReactNode>((genres, i) => (
    <a className={b("genres-link")} key={`coGenresArray-${i}`} href={genres.link}>
      {genres.name}
    </a>
  ));

  return (
    <div className={classNames(b(), className)}>
      <div className={b("content")}>
        <Link href="/book-edit/[id]" as={`/book-edit/${id}`}>
          <a className={b("image")}>
            <img src={image} alt={image} />
          </a>
        </Link>

        <div className={b("info")}>
          <Link href="/book-edit/[id]" as={`/book-edit/${id}`}>
            <a className={b("title")}>{title}</a>
          </Link>

          <div className={b("co-author")}>
            <span>Соавторы: </span>
            {coAuthorsArray}
          </div>
          <div className={b("genres")}>{coGenresArray}</div>
          <div className={b("info-bottom")}>
            <div className={b("status-wrap")}>
              <Status label="complete" />
            </div>
            <div className={b("pages-wrap")}>
              <div className={b("pages")}>
                {pagesCount}
                <span>
                  (+
                  {pagesAddCount}
                  )
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={b("utils")}>
        <div className={b("btn-group")}>
          <div className={b("fake-btn")}>В библиотеку</div>
          <div className={b("fake-btn")}>Купить за 149 ₽</div>
        </div>
        <div className={b("statistic-group")}>
          <div className={b("statistic-block")}>
            <div className={b("statistic-icon")}>
              <ViewIcon />
            </div>
            <div className={b("statistic-num")}>{viewsCount.toLocaleString()}</div>
          </div>
          <div className={b("statistic-block")}>
            <div className={b("statistic-icon")}>
              <ReviewIcon />
            </div>
            <div className={b("statistic-num")}>{reviewsCount.toLocaleString()}</div>
          </div>
          <div className={b("statistic-block")}>
            <div className={b("statistic-icon")}>
              <ReadIcon />
            </div>
            <div className={b("statistic-num")}>{readCount.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthorBook.defaultProps = defaultProps;
