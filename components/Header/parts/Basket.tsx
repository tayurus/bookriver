import { Dropdown } from "antd";
import React from "react";
import { IBook } from "~/types";
import { BookPreview, Button } from "~/components";
import { ReactComponent as BasketIcon } from "~/static/Header/basket.svg";
import { IProps } from "../interface";

export const Basket = ({ basketBooks, b, ...props }: IProps) => {
  const basketOverlay = (
    <div className={b("overlay", { basket: true })}>
      {basketBooks.length > 0 && (
        <>
          <div className={b("label", { gray: true, basket: true })}>В корзине</div>

          <div className={b("basket-list")}>
            {basketBooks.map((it: IBook, index: number) => (
              <BookPreview
                key={`basket-item-${index}`}
                {...it}
                className={b("basket-item")}
                withTitle
                withPrice
                withAuthor
                withOldPrice
              />
            ))}
          </div>

          <div className={b("basket-bottom")}>
            <div className={b("basket-total")}>
              <div className={b("label", { black: true })}>Итог</div>
              <div className={b("label", { black: true })}>
                {basketBooks.reduce((acc: number, it: IBook) => acc + +it.price, 0)}
                {' '}
                ₽
              </div>
            </div>
            <Button block>Перейти в корзину</Button>
          </div>
        </>
      )}

      {basketBooks.length === 0 && <div className={b("label", { gray: true, basket: true })}>Корзина пуста</div>}
    </div>
  );

  return (
    <div className={b("basket")}>
      <Dropdown overlay={basketOverlay} trigger={["click"]}>
        <div className={b("icon-wrapper")}>
          {basketBooks.length > 0 && <div className={b("notifications-count")}>{basketBooks.length}</div>}
          <BasketIcon className={b("icon")} />
        </div>
      </Dropdown>
    </div>
  );
};
