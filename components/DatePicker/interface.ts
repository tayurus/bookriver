import { DatePickerProps } from "antd/es/date-picker";

// @ts-ignore
export interface IProps extends DatePickerProps {
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
  type: "text",
};
