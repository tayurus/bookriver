import { SelectProps } from "antd/lib/select";

export interface IProps extends SelectProps<any> {
  title?: string;
  tip?: string;
  maxSelectedCount?: number;
}

export const defaultProps: IProps = {
  className: "",
  size: "large",
  tip: "",
  title: "",
};
