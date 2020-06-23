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
const b = cn("site-radio-group");

export const RadioGroup = ({ children, className, tip, title, size = "large", ...rest }: IProps) => (
  <div className={classNames(b(), className)}>
    {(title || tip) && (
      <div className={b("row")}>
        <div className={b("title")}>{title}</div>
        <div className={b("tip")}>{tip}</div>
      </div>
    )}

    <AntRadio.Group {...rest}>{children}</AntRadio.Group>
  </div>
);

RadioGroup.defaultProps = defaultProps;
