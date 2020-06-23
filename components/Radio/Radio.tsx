import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Radio as AntRadio } from "antd";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-radio");

export const Radio = ({ className, tip, title, ...rest }: IProps) => (
  <AntRadio className={classNames(b(), className)} {...rest}>
    {title}
  </AntRadio>
);

Radio.defaultProps = defaultProps;
