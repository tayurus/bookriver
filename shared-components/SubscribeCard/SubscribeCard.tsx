import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { ISubscribeCardProps, defaultProps } from "./interface";
import { UserView } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("subscribe-card");

export const SubscribeCard = ({ className, nowRead, getRead }: ISubscribeCardProps) => (
  <div className={classNames(b(), className)}>
    <div className={b("top")}>
      <UserView isSubscribers={false} horizont={false} />
    </div>
    <div className={b("middle")} />
    <div className={b("bottom")}>
      <div className={b("read-info")}>
        <div className={b("read-info-block")}>
          <div className={b("read-info-text")}>Читаю</div>
          <div className={b("read-info-num")}>{nowRead}</div>
        </div>
        <div className={b("read-info-block")}>
          <div className={b("read-info-text")}>Прочитал</div>
          <div className={b("read-info-num")}>{getRead}</div>
        </div>
      </div>
    </div>
  </div>
);

SubscribeCard.defaultProps = defaultProps;
