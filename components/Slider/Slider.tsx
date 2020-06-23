import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Slider as AntSlider } from "antd";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-slider");

export const Slider = ({ className, tip, title, meta, type, ...rest }: any) => {
  const { touched, error } = meta;
  return (
    <div className={classNames(b(), className)}>
      {(title || tip) && (
        <div className={b("row")}>
          <div className={b("title")}>{title}</div>
          <div className={b("tip")}>{tip}</div>
        </div>
      )}

      <AntSlider {...rest} />

      {touched && error && <div className={b("error")}>{error}</div>}
    </div>
  );
};

Slider.defaultProps = defaultProps;
