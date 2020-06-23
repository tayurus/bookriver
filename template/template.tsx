/* eslint-disable */
import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("block-name");

export class Component extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className } = this.props;

    return <div className={classNames(b(), className)} />;
  }
}

// export const a = {};
