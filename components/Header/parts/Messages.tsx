import React from "react";
import { ReactComponent as MessageIcon } from "~/static/Header/message.svg";
import { IProps } from "../interface";

export const Messages = ({ b }: IProps) => (
  <div className={b("messages")}>
    {/* <Dropdown trigger={["click"]}> */}
    <div className={b("icon-wrapper")}>
      {/* {notifications.length > 0 && <div className={b("notifications-count")}>{notifications.length}</div>} */}
      <MessageIcon className={b("icon")} />
    </div>
    {/* </Dropdown> */}
  </div>
);
