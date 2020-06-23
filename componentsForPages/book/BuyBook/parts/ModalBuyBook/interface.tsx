import { MouseEvent } from 'react';
import * as React from "react";

export enum ModalState {
  ChooseDonate,
  ChoosePay,
  Payment,
  Final
}

interface ICoAuthor {
  name: string;
  link: string;
}

export interface IProps {
  className?: string;
  visible?: boolean;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  stateModal?: ModalState;
  coAuthors?: ICoAuthor[];
  image?: string;
  title?: string;
  id?: string;
  priceSum?: number | string;
  final?: boolean;
}

export const defaultProps = {
  className: "",
  image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  coAuthors: {
    name: "???",
    link: "???",
  },
  title: "?????????????????",
  id: "??????????",
  priceSum: "????",
  final: false,
};
