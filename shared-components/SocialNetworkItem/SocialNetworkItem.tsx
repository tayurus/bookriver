import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { ISocialNetworkItemProps, defaultProps } from "./interface";
import { ReactComponent as FbIcon } from "./images/fb.svg";
import { ReactComponent as GmIcon } from "./images/gm.svg";
import { ReactComponent as MrIcon } from "./images/mr.svg";
import { ReactComponent as VkIcon } from "./images/vk.svg";
import { ReactComponent as YaIcon } from "./images/ya.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("social-network-item");

const iconTypes = {
  fb: <FbIcon />,
  gm: <GmIcon />,
  mr: <MrIcon />,
  vk: <VkIcon />,
  ya: <YaIcon />,
};

export const SocialNetworkItem = ({ className, turnOn, socName, socIcon, onClick }: ISocialNetworkItemProps) => (
  <div className={classNames(b(), className)}>
    <div className={b("top")}>
      <div className={b("icon", { gray: turnOn })}>{iconTypes[socIcon]}</div>
      <div className={b("name")}>{socName}</div>
    </div>
    <div className={b("bottom")}>
      <div className={b("btn")} onClick={onClick} role="button">
        {turnOn ? "Отключить" : "Подключить"}
      </div>
    </div>
  </div>
);

SocialNetworkItem.defaultProps = defaultProps;
