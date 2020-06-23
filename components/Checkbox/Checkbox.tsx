import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Checkbox as AntCheckbox } from "antd";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-checkbox");

export const Checkbox = ({ className, title, value, ...rest }: IProps) => (
  <div className={classNames(b(), className)}>
    <AntCheckbox {...rest} checked={value}>
      {title}
    </AntCheckbox>
  </div>
);

Checkbox.defaultProps = defaultProps;
