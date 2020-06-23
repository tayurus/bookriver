import Link from "next/link";
import { Dropdown } from "antd";
import React from "react";
import { IBook } from "~/types";
import { BookPreview } from "~/components";
import { ReactComponent as NotificationIcon } from "~/static/Header/notification.svg";
import { IProps } from "../interface";

export const Notifications = ({ notifications, b }: IProps) => {
  const notificationsOverlay = (
    <div className={b("overlay", { notifications: true })}>
      {notifications.length > 0 && (
        <>
          <div className={b("label", { gray: true, notifications: true })}>Новые уведомления</div>

          <div className={b("notifications-list")}>
            {notifications.map((it: IBook, index: number) => (
              <BookPreview
                key={`notification-item-${index}`}
                {...it}
                className={b("notification-item")}
                withDescription
                withEventTitle
              />
            ))}
          </div>
          <Link href="/">
            <a className={b("label", {})}>{`Лента уведомлений (${notifications.length})`}</a>
          </Link>
        </>
      )}

      {notifications.length === 0 && <div className={b("label", { gray: true, basket: true })}>Уведомлений нет</div>}
    </div>
  );

  return (
    <div className={b("notifications")}>
      <Dropdown overlay={notificationsOverlay} trigger={["click"]}>
        <div className={b("icon-wrapper")}>
          {notifications.length > 0 && <div className={b("notifications-count")}>{notifications.length}</div>}
          <NotificationIcon className={b("icon")} />
        </div>
      </Dropdown>
    </div>
  );
};
