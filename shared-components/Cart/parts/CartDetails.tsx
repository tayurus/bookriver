import React from "react";
import { withNaming } from "@bem-react/classname";
import Link from "next/link";
import { IProps, defaultProps } from "../interface";
import { Radio, Input } from 'antd';
import { ReactComponent as RemoveIcon } from "~/static/Cart/trash.svg";
import { Button, Label } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("cart");

export const CartDetails = ({ className, title, coAuthors, listCount, id, image, priceNum, priceSum }: IProps) => {

  return (
    <div className={b("details")}>
      <div className={b("details-price")}>
        <div className={b("details-price-text")}>
          Сумма к оплате:
        </div>
        <div className={b("details-price-sum")}>
          {priceSum}
        </div>
      </div>
      <div className={b("details-pay")}>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <div className={b("details-pay-block")}>
            <Radio value={2} disabled>Виртуальная карта — 45 ₽</Radio>
          </div>
          <div className={b("details-pay-block")}>
            <Radio value={1}>Карта Visa 4276 **** **** 4444</Radio>
            <button className={b("details-pay-remove-btn")}>
              <RemoveIcon />
            </button>
          </div>
          <div className={b("details-pay-block")}>
            <Radio value={3}>C помощью другой карты</Radio>
          </div>
        </Radio.Group>
      </div>
      <div className={b("details-email")}>
        <Label text="E-mail" className={b("details-label")} />
        <Input placeholder="Email" />
      </div>
      <div className={b("details-btn-wrap")}>
        <Button block type="primary" className={b("details-btn")}>Оплатить</Button>
      </div>

    </div>
  );
};

CartDetails.defaultProps = defaultProps;
