import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, ModalState } from "./interface";
import { Modal } from "antd";
import { ChooseDonate, ChoosePay, Payment, Final } from "~/componentsForPages/book/BuyBook/parts/ModalBuyBook/parts";
import { Button } from "~/components";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("modal-buy-book");


const mocks = {
  bookInfo: {
    title: "Ветер Севера",
    id: "46824824599",
    coAuthors: [
      { name: "Марина суржевская", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Дмитрий Иванов", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Лансер Гэри", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    priceSum: 2000,
  },
};

export const ModalBuyBook = ({ className, visible, onOk, onCancel, priceSum, final, stateModal = ModalState.ChooseDonate }: IProps) => (
  <div>
    <Modal
      className={classNames(b(), className)}
      title="Оплата доступа к книге"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={<Button block size="large" type="primary" onClick={onOk}>Оплатить</Button>}
    >

      {stateModal === ModalState.ChooseDonate && <ChooseDonate {...mocks.bookInfo} />}
      {stateModal === ModalState.ChoosePay && <ChoosePay {...mocks.bookInfo} />}
      {stateModal === ModalState.Payment && <Payment {...mocks.bookInfo} />}
      {stateModal === ModalState.Final && <Final {...mocks.bookInfo} />}
    </Modal>
  </div>
  );


ModalBuyBook.defaultProps = defaultProps;
