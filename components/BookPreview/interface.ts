import { IBook } from "~/types";

export const defaultProps = {
  className: "",
  imgUrl: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  author: "Автор неизвестен",
  title: "Без названия",
  price: "?",
  oldPrice: "",
  eventTitle: "Событие",
  eventDescription: "Произошло какое-то событие",
  isAudio: false,
  withTitle: false,
  withAuthor: false,
  withPrice: false,
  withOldPrice: false,
  withEventTitle: false,
  withDescription: false,
};

export interface IProps extends IBook {
  className?: string;
  eventTitle?: string;
  eventDescription?: string;
  isAudio?: boolean;
  withTitle?: boolean;
  withAuthor?: boolean;
  withPrice?: boolean;
  withOldPrice?: boolean;
  withEventTitle?: boolean;
  withDescription?: boolean;
}
