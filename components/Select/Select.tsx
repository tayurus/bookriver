import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Select as AntSelect } from "antd";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-select");
const { Option } = AntSelect;

export const Select = ({
  className,
  tip,
  title,
  options,
  meta,
  value,
  onBlur,
  onFocus,
  onChange,
  maxSelectedCount,
  ...rest
}: any) => {
  const { touched, error } = meta;

  const handleValueChange = (value: any) => {
    if (typeof maxSelectedCount !== "undefined") {
      if (Array.isArray(value) && value["length"] <= maxSelectedCount) {
        onChange(value);
        return;
      }
    }
    onChange(value);
  };
  return (
    <div className={classNames(b(), className)}>
      {(title || tip) && (
        <div className={b("row")}>
          <div className={b("title")}>{title}</div>
          {typeof maxSelectedCount !== "undefined" ? (
            `${value.length}/${maxSelectedCount}`
          ) : (
            <div className={b("tip")}>{tip}</div>
          )}
        </div>
      )}

      <AntSelect
        {...rest}
        onChange={handleValueChange}
        value={value}
        onFocus={() => onFocus(value)}
        onBlur={() => onBlur(value)}
      >
        {options?.map((opt) => (
          <Option value={opt.value} key={`option_${opt.value}`}>
            {opt.title}
          </Option>
        ))}
      </AntSelect>

      {touched && error && <div className={b("error")}>{error}</div>}
    </div>
  );
};

Select.defaultProps = defaultProps;
