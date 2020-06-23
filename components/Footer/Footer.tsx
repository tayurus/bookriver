import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IFooterProps, defaultProps } from "./interface";
import { ReactComponent as VisaIcon } from "~/static/Footer/visa.svg";
import { ReactComponent as MasterCardIcon } from "~/static/Footer/mastercard.svg";
import { ReactComponent as VkIcon } from "~/static/Footer/vk.svg";
import { ReactComponent as OkIcon } from "~/static/Footer/ok.svg";
import { ReactComponent as FbIcon } from "~/static/Footer/fb.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("new-site-footer");

export const Footer = ({ className }: IFooterProps) => (
  <footer className={classNames(b(), className)}>
    <div className={b("inner")}>
      <nav className={b("nav")}>
        <ul className={b("list")}>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              О проекте
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Новости
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Партнерам
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Авторам
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Читателям
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Помощь
            </a>
          </li>
        </ul>
        <ul className={b("list")}>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Публичная оферта
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="#">
              Соглашение о конфиденциальности
            </a>
          </li>
        </ul>
      </nav>

      <div className={b("bottom")}>
        <div className={b("age-wrapper")}>
          <div className={b("adults-only")}>18+</div>
          <div className={b("age-text")}>
            Сайт может содержать информацию запрещенную для просмотра лицами не достигшими 18 лет
          </div>
        </div>

        <div className={b("bottom-group")}>
          <div className={b("bank-systems")}>
            <VisaIcon className={b("bank-item")} />
            <MasterCardIcon className={b("bank-item")} />
          </div>

          <div className={b("social-networks")}>
            <a href="#" className={b("social-link")}>
              <VkIcon />
            </a>
            <a href="#" className={b("social-link")}>
              <OkIcon />
            </a>
            <a href="#" className={b("social-link")}>
              <FbIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = defaultProps;
