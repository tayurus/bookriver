import { RadioGroupProps } from "antd/lib/radio";

export interface IProps extends RadioGroupProps {
  title?: string;
  tip?: string;
}

export const defaultProps = {
  className: "",
  size: "medium",
  tip: "",
  title: "",
};
