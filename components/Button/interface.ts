import React from "react";
import { ButtonType, ButtonProps } from "antd/lib/button/button";

export interface IProps extends Omit<ButtonProps, 'type'>{
  children?: React.ReactNode;
  className?: string;
  view?: "fluid" | "onlyIcon";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  type?: ButtonType | "secondary" | "disabled" | "transparent";
}

export const defaultProps = {
  type: "default",
  size: "medium",
};
