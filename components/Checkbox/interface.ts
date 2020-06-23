import { CheckboxProps } from "antd/lib/checkbox";

export interface IProps extends CheckboxProps {
  title?: string;
}

export const defaultProps = {
  className: "",
  tip: "",
  title: "",
};
