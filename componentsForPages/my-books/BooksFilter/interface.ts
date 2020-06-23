import { attributes } from "~/constants/attributes";

export interface IProps {
  className?: string;
  data?: Record<any, any>;
}

export const defaultProps = {
  className: "",
  data: {},
};

export interface IState {}

export const getInitialValues = (data) => ({
  [attributes["жанр"]]: data[attributes["жанр"]] || [],
  [attributes["статус"]]: data[attributes["статус"]] || 0,
  [attributes["размер"]]: data[attributes["размер"]] || 0,
});
