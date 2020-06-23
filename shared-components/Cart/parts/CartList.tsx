import React from "react";
import { withNaming } from "@bem-react/classname";
import Link from "next/link";
import { IProps, defaultProps } from "../interface";
import { CartItem } from "~/shared-components/Cart/parts/CartItem";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("cart");

export const CartList = ({ className, title, coAuthors, listCount, id, image, priceNum }: IProps) => {

  return (
    <div className={b("cartlist")}>
      <div className={b("cartlist-top")}>
        <div className={b("cartlist-count")}>
          Корзина ({listCount})
        </div>
        <div className={b("cartlist-clearcart")}>
          <button className={b("cartlist-clearcart-btn")}>Очистить корзину</button>
        </div>
      </div>
      <div className={b("cartlist-bottom")}>
        <CartItem
          listCount={listCount}
          image={image}
          priceNum={priceNum}
          id={id}
          coAuthors={coAuthors}
          title={title}
        />
        <CartItem
          listCount={listCount}
          image={image}
          priceNum={priceNum}
          id={id}
          coAuthors={coAuthors}
          title={title}
        />
        <CartItem
          listCount={listCount}
          image={image}
          priceNum={priceNum}
          id={id}
          coAuthors={coAuthors}
          title={title}
        />
        <CartItem
          listCount={listCount}
          image={image}
          priceNum={priceNum}
          id={id}
          coAuthors={coAuthors}
          title={title}
        />
      </div>
    </div>
  );
};

CartList.defaultProps = defaultProps;
