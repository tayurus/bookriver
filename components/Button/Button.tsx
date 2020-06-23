import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Button as AntButton } from "antd";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-button");

export const Button = ({ children, className, type, onClick, iconAfter, iconBefore, view, size, ...rest }: IProps) => (
  <AntButton
    className={classNames(
      b({
        [type]: true,
        view,
        [size]: true,
      }),
      className
    )}
    onClick={onClick}
    type={type as any}
    {...rest}
  >
    <div className={b("wrap")}>
      {iconBefore && <span className={b("icon-before")}>{iconBefore}</span>}
      <span className={b("text")}>{children}</span>
      {iconAfter && <span className={b("icon-after")}>{iconAfter}</span>}
    </div>
  </AntButton>
);

Button.defaultProps = defaultProps;
