import { RadioProps } from "antd/lib/radio";

export interface IProps extends RadioProps {
  title?: string;
  tip?: string;
}

export const defaultProps = {
  className: "",
};
