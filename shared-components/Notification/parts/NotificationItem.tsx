import React from "react";
import { withNaming } from "@bem-react/classname";
import Link from "next/link";
import { IProps, defaultProps } from "../interface";
import { Avatar } from "antd";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("notification");

export const NotificationItem = ({ id, image, userName, avatarImg, isBookCover, userAction, bookName, time, isNew }: IProps) => (
  <div className={b("item", { new: isNew })}>
    <div className={b("item-content")}>
      <Avatar className={b("item-avatar")} size={42} src={avatarImg} />
      <div className={b("item-info")}>
        <div className={b("item-action")}>
          <a href="/#" className={b("item-info-link")}>{userName}</a>
          <span className={b("item-info-action")}> { userAction } </span>
          <a href="/#" className={b("item-info-link")}>{bookName}</a>
        </div>
        <div className={b("item-time")}>{time}</div>
      </div>
    </div>
    <div className={b("item-cover", { cover: isBookCover })}>
      <Link href={`book/${id}`}>
        <img className={b("item-cover-img")} src={image} alt={image} />
      </Link>
    </div>
  </div>
  );

NotificationItem.defaultProps = defaultProps;
