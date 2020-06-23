import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, ModalState } from "./../interface";
import { BookInfoModal } from "./BookInfoModal";
import { Radio, Input } from 'antd';
import { ReactComponent as RemoveIcon } from "~/static/BuyBook/ModalBuyBook/trash.svg";

const { TextArea } = Input;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("modal-buy-book");


export const ChoosePay = ({ className, title, coAuthors, id, image, priceSum }: IProps) => (
  <div className={(b("choose-donate"))}>
    <div className={(b("choose-donate-top"))}>
      <BookInfoModal title={title} coAuthors={coAuthors} id={id} image={image} />
    </div>
    <div className={(b("choose-donate-bottom"))}>
      <div className={b("choose-pay-price")}>
        <div className={b("choose-pay-price-text")}>
          Сумма к оплате:
        </div>
        <div className={b("choose-pay-price-sum")}>
          {priceSum}
        </div>
      </div>
      <div className={b("choose-pay-pay")}>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <div className={b("choose-pay-block")}>
            <Radio value={2} disabled>Виртуальная карта — 45 ₽</Radio>
          </div>
          <div className={b("choose-pay-block")}>
            <Radio value={1}>Карта Visa 4276 **** **** 4444</Radio>
            <button className={b("choose-pay-remove-btn")}>
              <RemoveIcon />
            </button>
          </div>
          <div className={b("choose-pay-block")}>
            <Radio value={3}>C помощью другой карты</Radio>
          </div>
        </Radio.Group>
      </div>
    </div>
  </div>
);


ChoosePay.defaultProps = defaultProps;
