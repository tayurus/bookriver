import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import Link from "next/link";
import { IProps, defaultProps } from "./interface";
import {
  CartList,
  CartDetails,
} from "./parts";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("cart");

export const Cart = ({ className, title, coAuthors, id, image, priceNum, listCount, priceSum }: IProps) => {
  return (
    <div className={classNames(b(), className)}>
      <div className={b("wrap")}>
        <CartList
          listCount={listCount}
          image={image}
          priceNum={priceNum}
          id={id}
          coAuthors={coAuthors}
          title={title}
        />
        <CartDetails />
      </div>
    </div>
  );
};

Cart.defaultProps = defaultProps;
