import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { IProps, defaultProps } from "./interface";
import { NavMenu, UserView, Button } from "~/components";
import { pages } from "~/constants/pages";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("author-card");

export const AuthorCard = ({ className, userInfo }: IProps) => {
  const popoverContent = (
    <div className={b("popover-content")}>
      <span className={b("popover-option")}>Пожаловаться</span>
    </div>
  );

  return (
    <div className={classNames(b(), className)}>
      <div className={b("wrapper")}>
        <UserView isSubscribers={false} horizont userInfo={userInfo} />
        <Button type="primary" className={b("subscribe-btn")} block>
          Подписаться
        </Button>
        <div className={b("row")}>
          <Button block className={b("write-message-btn")}>
            Написать сообщение
          </Button>
          <Popover placement="bottomRight" content={popoverContent} trigger="click">
            <Button className={b("more-button")}>
              <MoreOutlined />
            </Button>
          </Popover>
        </div>
      </div>

      <div className={b("bottom")}>
        <NavMenu
          options={[
            { title: "Произведения", href: `${pages.author.href}`, as: `${pages.author.as}/${userInfo.id}` },
            { title: "Записи в блог", href: "#" },
          ]}
        />
      </div>
    </div>
  );
};

AuthorCard.defaultProps = defaultProps;
