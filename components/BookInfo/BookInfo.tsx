import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import Link from "next/link";
import { IProps, defaultProps } from "./interface";
import { Status } from "~/components";
import { ReactComponent as ShareIcon } from "~/static/BookInfo/share.svg";
import { ReactComponent as MoveIcon } from "~/static/BookInfo/move.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-info");

export const BookInfo = ({
  className,
  imgUrl,
  title,
  publishDate,
  charactersCount,
  readersCount,
  alreadyReadCount,
  willReadCount,
  viewsCount,
  recommendCount,

  author_id,
  cover_url,
  created_at,
  formats,
  free,
  id,
  name,
  price,
  status_complete,
  status_publish,
  type,
  updated_at,
  symbols,
}: IProps) => (
  <Link href="/book-edit/[bookId]" as={`/book-edit/${id}`}>
    <div className={classNames(b(), className)}>
      <img className={b("image")} src={cover_url && `${cover_url}?w=100&h=150`} alt="изображение" />

      <div className={b("common")}>
        <div className={b("title")}>{name}</div>

        <div className={b("row", { first: true })}>
          <div className={b("publish-date")}>{new Date(created_at).toLocaleDateString()}</div>
          <div className={b("divider")} />
          <div className={b("characters")}>{symbols} зн.</div>
          <a href="#" className={b("comments")}>
            Комментарии ({charactersCount})
          </a>
        </div>

        <div className={b("row", { first: true })}>
          <Status label="writing" className={b("status")} />
        </div>

        <table cellPadding="0" className={b("table")}>
          <tr className={b("tr")}>
            <td className={b("table-cell")}>
              <div className={b("table-cell-title")}>читают</div>
              <div className={b("table-cell-num")}>{readersCount}</div>
            </td>
            <td className={b("table-cell")}>
              <div className={b("table-cell-title")}>прочитали</div>
              <div className={b("table-cell-num")}>{alreadyReadCount}</div>
            </td>
            <td className={b("table-cell")}>
              <div className={b("table-cell-title")}>будут читать</div>
              <div className={b("table-cell-num")}>{willReadCount}</div>
            </td>
            <td className={b("table-cell")}>
              <div className={b("table-cell-title")}>просмотры</div>
              <div className={b("table-cell-num")}>{viewsCount}</div>
            </td>
            <td className={b("table-cell")}>
              <div className={b("table-cell-title")}>рекомендуют</div>
              <div className={b("table-cell-num")}>{recommendCount}</div>
            </td>
          </tr>
        </table>
      </div>

      <div className={b("controls")}>
        <ShareIcon className={b("icon")} />
        <MoveIcon className={b("icon")} />
      </div>
    </div>
  </Link>
);

BookInfo.defaultProps = defaultProps;
