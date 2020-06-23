import { attributes } from "~/constants/attributes";

export interface IProps {
  className?: string;
  data: Record<any, any>;
  free?: boolean | string;
  price?: number;
  book_id?: number;
}

export const defaultProps: IProps = {
  className: "",
  data: {},
};

export interface IState {}

export interface IForm {
  firstName?: string;
}

export const getInitialValues = (data) => ({
  free: data["free"] || "false",
  [attributes["валюта"]]: data[attributes["валюта"]] || "0",
  price: data["price"] || 0,
  [attributes["количествоБесплатныхГлав"]]: data[attributes["количествоБесплатныхГлав"]] || "0",
});
