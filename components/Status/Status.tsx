import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-status");

const statuses = {
  complete: "завершен",
  writing: "В процессе",
  "не опубликована": "hidden",
  unknown: "статус неизвестен",
  "карта просрочена": "error",
  аудиокнига: "audio",
};

export const Status = ({ className, label }: IProps) => {
  return <span className={classNames(b({ [label]: true }), className)}>{statuses[label] || "статус неизвестен"}</span>;
};

Status.defaultProps = defaultProps;
