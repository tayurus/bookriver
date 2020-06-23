import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Input as AntInput } from "antd";
import { defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-input");
// const AntTextArea = AntInput.TextArea;

const inputTypes = (rest: any, value: any) => ({
  password: <AntInput.Password {...rest} value={value} />,
  text: <AntInput type="text" {...rest} value={value} />,
  number: <AntInput type="number" {...rest} value={value} />,
  // использую здесь обычную textarea, потому что Антовская не хотела отображать свой value, пока не дашь ей фокус
  textarea: (
    <textarea className={b("textarea")} rows={4} {...rest}>
      {value}
    </textarea>
  ),
});

export const Input = ({ className, tip, title, meta, type, value, maxSymbolsCount, ...rest }: any) => {
  const { touched, error } = meta;
  return (
    <div className={classNames(b(), className)}>
      {(title || tip) && (
        <div className={b("row")}>
          <div className={b("title")}>{title}</div>
          {typeof maxSymbolsCount !== "undefined" ? (
            `${value.length}/${maxSymbolsCount}`
          ) : (
            <div className={b("tip")}>{tip}</div>
          )}
        </div>
      )}

      {inputTypes(rest, value)[type]}

      {touched && error && <div className={b("error")}>{error}</div>}
    </div>
  );
};

Input.defaultProps = defaultProps;
