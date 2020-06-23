import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, NavMenuItem } from "./interface";
import { ActiveLink } from "../index";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("nav-menu");

const navItemsList = {
  "Мои произведения": (info: NavMenuItem) => (
    <li className={b("list-item")} key="1">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { books: true })}>
          Мои произведения
        </a>
      </ActiveLink>
    </li>
  ),
  Произведения: (info: NavMenuItem) => (
    <li className={b("list-item")} key="1">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { books: true })}>
          Произведения
        </a>
      </ActiveLink>
    </li>
  ),
  Финансы: (info: NavMenuItem) => (
    <li className={b("list-item")} key="2">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { wallet: true })}>
          Финансы
        </a>
      </ActiveLink>
    </li>
  ),
  "Мои покупки": (info: NavMenuItem) => (
    <li className={b("list-item")} key="3">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { basket: true })}>
          Мои покупки
        </a>
      </ActiveLink>
    </li>
  ),
  Подписки: (info: NavMenuItem) => (
    <li className={b("list-item")} key="4">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { subscription: true })}>
          Подписки
        </a>
      </ActiveLink>
    </li>
  ),
  "Записи в блог": (info: NavMenuItem) => (
    <li className={b("list-item")} key="5">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { blog: true })}>
          Записи в блог
        </a>
      </ActiveLink>
    </li>
  ),
  Уведомления: (info: NavMenuItem) => (
    <li className={b("list-item")} key="6">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { notification: true })}>
          Уведомления
        </a>
      </ActiveLink>
    </li>
  ),
  Настройки: (info: NavMenuItem) => (
    <li className={b("list-item")} key="7">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { settings: true })}>
          Настройки
        </a>
      </ActiveLink>
    </li>
  ),
  Сообщения: (info: NavMenuItem) => (
    <li className={b("list-item")} key="8">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { messages: true })}>
          Сообщения
        </a>
      </ActiveLink>
    </li>
  ),
  Профиль: (info: NavMenuItem) => (
    <li className={b("list-item")} key="9">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { profile: true })}>
          Профиль
        </a>
      </ActiveLink>
    </li>
  ),
  Выход: (info: NavMenuItem) => (
    <li className={b("list-item")} key="9">
      <ActiveLink activeClassName={b("active-link")} href={info.href} as={info.as}>
        <a href="" className={b("link", { exit: true })} onClick={info.onClick}>
          Выход
        </a>
      </ActiveLink>
    </li>
  ),
};

export const NavMenu = ({ className, options, isMobile }: IProps) => (
  <nav className={classNames(b({ mobile: isMobile }), className)}>
    <ul className={b("list")}>{options.map((it) => navItemsList[it.title](it))}</ul>
  </nav>
);
