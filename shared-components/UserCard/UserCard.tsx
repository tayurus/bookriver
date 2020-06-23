import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IUserCardProps, defaultProps } from "./interface";
// import { NavMenu } from "../../components";
import { UserView } from "~/components";
// import { ReactComponent as ArtworksIcon } from "./images/artworks.svg";
// import { ReactComponent as EntryIcon } from "./images/entry.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("user-card");

export const UserCard = ({ className }: IUserCardProps) => (
  <div className={classNames(b(), className)}>
    <div className={b("top")}>
      <UserView isSubscribers={false} horizont={false} />
    </div>
    <div className={b("middle")}>
      <div className={b("fake-btn")}>
        <span className={b("fake-btn-icon")}>+</span>
        <span className={b("fake-btn-text")}>Подписаться</span>
      </div>
    </div>
    <div className={b("bottom")} />
  </div>
);

UserCard.defaultProps = defaultProps;
