import { AutoCompleteProps } from "antd/lib/auto-complete";
import { ReactNode } from "react";

export interface IProps extends AutoCompleteProps {
  title?: string;
  tip?: string;
}

export const defaultProps = {
  className: "",
  size: "large",
  tip: "",
  title: "",
};

export interface IOption {
  value: any;
  label: ReactNode;
}
