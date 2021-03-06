import { InputProps } from "antd/lib/input/Input";

export interface IProps extends InputProps {
  title?: string;
  tip?: string;
  meta?: any;
  type: string;
}

export const defaultProps = {
  className: "",
  size: "large",
  tip: "",
  title: "",
  meta: {},
};
