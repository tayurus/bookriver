import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { DatePicker as AntDatePicker } from "antd";
import moment from "moment";
import { IProps, defaultProps } from "./interface";
import { ReactComponent as CalendarIcon } from "~/static/DatePicker/calendar.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-datepicker");

export const DatePicker = ({ value, title, meta, className, tip, ...rest }: any) => {
  const dateFormat = "YYYY-MM-DD";

  const { touched, error } = meta;
  return (
    <div className={classNames(b(), className)}>
      {(title || tip) && (
        <div className={b("row")}>
          <div className={b("title")}>{title}</div>
          <div className={b("tip")}>{tip}</div>
        </div>
      )}
      <AntDatePicker
        suffixIcon={<CalendarIcon />}
        {...rest}
        format={dateFormat}
        value={value ? moment(value, dateFormat) : ""}
      />

      {touched && error && <div className={b("error")}>{error}</div>}
    </div>
  );
};

DatePicker.defaultProps = defaultProps;
