import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import Link from "next/link";
import { IPurchaseProps, defaultProps } from "./interface";
import { ReactComponent as BillIcon } from "./images/bill.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("purchase");

export const Purchase = ({ className, title, coAuthors, id, image, priceNum, data, time }: IPurchaseProps) => {
  const coAuthorsArray = coAuthors.map<React.ReactNode>((author, i) => (
    <a className={b("co-author-link")} key={i} href={author.link}>
      {author.name}
    </a>
  ));

  return (
    <div className={classNames(b(), className)}>
      <div className={b("id-wrap")}>
        <div className={b("id")}>
          ID
          {id}
        </div>
      </div>
      <div className={b("data-wrap")}>
        <div className={b("data")}>{data}</div>
        <div className={b("time")}>{time}</div>
      </div>
      <div className={b("content")}>
        <div className={b("image")}>
          <img src={image} alt={image} />
        </div>
        <div className={b("info")}>
          <Link href={`book/${id}`}>
            <a className={b("title")}>{title}</a>
          </Link>

          <div className={b("co-author")}>{coAuthorsArray}</div>
        </div>
      </div>
      <div className={b("price-wrap")}>
        <div className={b("price")}>
          <div className={b("bill")}>
            <BillIcon />
          </div>
          <div className={b("price-num")}>{priceNum}</div>
        </div>
      </div>
    </div>
  );
};

Purchase.defaultProps = defaultProps;
