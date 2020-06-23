import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Switch as AntdSwitch } from "antd";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-switch");

export class Switch extends React.PureComponent<IProps, any> {
  static defaultProps = defaultProps;

  render() {
    const { props } = this;
    return <AntdSwitch className={classNames(b())} {...props} />;
  }
}
