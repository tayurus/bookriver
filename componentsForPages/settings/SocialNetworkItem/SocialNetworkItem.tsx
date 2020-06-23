import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { ISocialNetworkItemProps, defaultProps } from "./interface";
import { ReactComponent as FbIcon } from "~/static/SocialNetworkItem/fb.svg";
import { ReactComponent as GmIcon } from "~/static/SocialNetworkItem/gm.svg";
import { ReactComponent as VkIcon } from "~/static/SocialNetworkItem/vk.svg";
import { ReactComponent as YaIcon } from "~/static/SocialNetworkItem/ya.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("social-network-item");

const iconTypes = {
  facebook: <FbIcon />,
  google: <GmIcon />,
  vkontakte: <VkIcon />,
  yandex: <YaIcon />,
};
const socNames = {
  facebook: "Facebook",
  google: "Google",
  vkontakte: "Вконтакте",
  yandex: "Яндекс",
};

export const SocialNetworkItem = ({ className, turnOn, socIcon, onClick }: ISocialNetworkItemProps) => (
  <div className={classNames(b(), className)}>
    <div className={b("top")}>
      <div className={b("icon", { gray: turnOn })}>{iconTypes[socIcon]}</div>
      <div className={b("name")}>{socNames[socIcon]}</div>
    </div>
    <div className={b("bottom")}>
      <div className={b("btn")} onClick={onClick}>
        {turnOn ? "Отключить" : "Подключить"}
      </div>
    </div>
  </div>
);

SocialNetworkItem.defaultProps = defaultProps;
