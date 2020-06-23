import React from "react";
import { storiesOf } from "@storybook/react";
import { NavMenu } from "./NavMenu";

storiesOf("NavMenu", module).add("default", () => (
  <NavMenu
    options={[
      { title: "Мои покупки", href: "#" },
      { title: "Подписки", href: "#" },
      { title: "Записи в блог", href: "#" },
      { title: "Сообщения", href: "#" },
      { title: "Уведомления", href: "#" },
    ]}
  />
));
