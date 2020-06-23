import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, ModalState } from "./../interface";
import { BookInfoModal } from "./BookInfoModal";
import { Radio, Input } from 'antd';

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("modal-buy-book");


export const Final = ({ className, title, coAuthors, id, image, priceSum }: IProps) => (
  <div className={(b("final"))}>
    <div className={(b("final-wrap"))}>
      <div className={(b("final-title"))}>Спасибо за покупку!</div>
      <BookInfoModal final title={title} coAuthors={coAuthors} id={id} image={image} />
    </div>
  </div>
);


Final.defaultProps = defaultProps;
