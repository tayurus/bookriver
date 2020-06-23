import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps } from "./interface";
import {
  NotificationItem
} from "./parts";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("notification");

export const Notification = ({ className, ...props }: IProps) => (
  <div className={classNames(b(), className)}>
    <div className={b("wrap")}>
      <NotificationItem isNew />
      <NotificationItem isNew />
      <NotificationItem isNew />
      <NotificationItem {...props} />
      <NotificationItem {...props} />
      <NotificationItem {...props} />
      <NotificationItem {...props} />
      <NotificationItem {...props} />
      <NotificationItem {...props} />
      <NotificationItem {...props} />
    </div>
  </div>
  );

Notification.defaultProps = defaultProps;
