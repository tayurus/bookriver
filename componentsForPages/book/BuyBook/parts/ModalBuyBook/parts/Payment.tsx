import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, ModalState } from "./../interface";
import { BookInfoModal } from "./BookInfoModal";
import { Radio, Input } from 'antd';
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("modal-buy-book");


export const Payment = ({ className, title, coAuthors, id, image, priceSum }: IProps) => (
  <div className={(b("choose-donate"))}>
    <div className={(b("choose-donate-top"))}>
      <BookInfoModal title={title} coAuthors={coAuthors} id={id} image={image} />
    </div>
    <div className={(b("choose-donate-bottom"))}>
      <div className={(b("payment-fake-iframe"))}>
          тут будет iframe для оплаты
      </div>
    </div>
  </div>
);


Payment.defaultProps = defaultProps;
