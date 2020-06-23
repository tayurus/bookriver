import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, ModalState } from "./../interface";
import { BookInfoModal } from "./BookInfoModal";
import { Radio, Input } from 'antd';

const { TextArea } = Input;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("modal-buy-book");


export const ChooseDonate = ({ className, title, coAuthors, id, image }: IProps) => (
  <div className={(b("choose-donate"))}>
    <div className={(b("choose-donate-top"))}>
      <div className={(b("choose-donate-undertitle"))}>Поддержите творчество автора, покажите, что его труд важен для вас</div>
      <BookInfoModal title={title} coAuthors={coAuthors} id={id} image={image} />
    </div>
    <div className={(b("choose-donate-bottom"))}>
      <div className={(b("choose-donate-sum"))}>
        <div className={(b("choose-donate-sum-title"))}>Размер нарады</div>
        <Radio.Group defaultValue="d" className={(b("choose-donate-sum-group"))}>
          <Radio.Button value="a" className={(b("choose-donate-sum-btn"))}>10 руб.</Radio.Button>
          <Radio.Button value="b" className={(b("choose-donate-sum-btn"))}>50 руб.</Radio.Button>
          <Radio.Button value="c" className={(b("choose-donate-sum-btn"))}>100 руб.</Radio.Button>
          <Radio.Button value="d" className={(b("choose-donate-sum-btn"))}>200 руб.</Radio.Button>
          <Radio.Button value="e" className={(b("choose-donate-sum-btn"))}>500 руб.</Radio.Button>
        </Radio.Group>
      </div>
      <div className={(b("choose-donate-comment"))}>
        <div className={(b("choose-donate-comment-title"))}>Комментарий</div>
        <TextArea rows={4} className={(b("choose-donate-comment-area"))} />
      </div>
      <div className={(b("choose-donate-rules"))}>
        Совершая перевод, вы соглашаетесь с <a href="#">правилами</a>
      </div>
    </div>
  </div>
);


ChooseDonate.defaultProps = defaultProps;
