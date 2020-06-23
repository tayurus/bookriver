import React from "react";
import { withNaming } from "@bem-react/classname";
import Link from "next/link";
import { IProps, defaultProps } from "../interface";
import { ReactComponent as RemoveIcon } from "~/static/Cart/trash.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("cart");

export const CartItem = ({ className, title, coAuthors, listCount, id, image, priceNum }: IProps) => {
  const coAuthorsArray = coAuthors.map<React.ReactNode>((author, i) => (
    <a className={b("cartitem-co-author-link")} key={i} href={author.link}>
      {author.name}
    </a>
  ));

  return (
    <div className={b("cartitem")}>
      <div className={b("cartitem-content")}>
        <div className={b("cartitem-image")}>
          <img src={image} alt={image} />
        </div>
        <div className={b("cartitem-info")}>
          <Link href={`book/${id}`}>
            <a className={b("cartitem-title")}>{title}</a>
          </Link>
          <div className={b("cartitem-co-author")}>{coAuthorsArray}</div>
        </div>
      </div>
      <div className={b("cartitem-price")}>
        <div className={b("cartitem-price-num")}>{priceNum}</div>
        <div className={b("cartitem-remove")}>
          <button className={b("cartitem-remove-btn")}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = defaultProps;
