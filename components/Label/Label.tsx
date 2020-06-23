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
const b = cn("site-label");

export class Label extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, text, tip } = this.props;

    return (
      <div className={classNames(b(), className)}>
        {text && <div className={b("text")}>{text}</div>}
        {tip && <div className={b("tip")}>{tip}</div>}
      </div>
    );
  }
}
