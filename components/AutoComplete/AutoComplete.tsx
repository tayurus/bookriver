import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { AutoComplete as AntAutoComplete, Input } from "antd";
import { IProps, defaultProps, IOption } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-AutoComplete");

export const AutoComplete = ({ className, tip, placeholder, title, size = "large", ...rest }: IProps) => (
  <div className={classNames(b(), className)}>
    {(title || tip) && (
      <div className={b("row")}>
        <div className={b("title")}>{title}</div>
        <div className={b("tip")}>{tip}</div>
      </div>
    )}

    <AntAutoComplete {...rest}>
      <Input size={size} />
    </AntAutoComplete>
  </div>
);

AutoComplete.defaultProps = defaultProps;
