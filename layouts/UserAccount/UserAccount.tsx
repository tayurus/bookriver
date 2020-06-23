import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Header, NavMenu, Footer } from "~/components";
import { pages } from "~/constants/pages";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("user-account-layout");

const mocks = {
  userBooks: [{ title: "Ветер Севера. Риверстейн" }, { title: "Ветер Севера. Риверстейн" }],
  userInfo: {
    userImg: "https://cxl.com/wp-content/uploads/2016/03/nate_munger.png",
    userName: "Константин",
  },

  basketBooks: [
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
    {
      title: "Ветер Севера. Риверстейн",
      author: { name: "Марина Суржевская" },
      price: 458,
      oldPrice: 500,
    },
  ],
  notifications: [
    {
      eventTitle: "Удаление книги",
      eventDescription: "Автор не планирует завершать книгу, удалил ее. Оплата книги будет возвращена на карту.",
    },
    {
      eventTitle: "Внесены изменения",
      eventDescription: "В книгу, которую вы внесены добавлены изменения.",
    },
  ],
};

export class UserAccountLayout extends React.Component<any, any> {
  render() {
    const { children } = this.props;

    return (
      <>
        <Header
          userBooks={mocks.userBooks}
          basketBooks={mocks.basketBooks}
          userInfo={mocks.userInfo}
          notifications={mocks.notifications}
        />
        <div className="site-container" style={{ flexGrow: 1 }}>
          <div className={classNames(b())}>
            <div className={b("side-nav")}>
              <NavMenu
                options={[
                  { title: "Мои произведения", href: pages["books"] },
                  { title: "Финансы", href: pages["finance"] },
                  { title: "Мои покупки", href: "#" },
                  { title: "Подписки", href: "#" },
                  { title: "Записи в блог", href: "#" },
                  { title: "Сообщения", href: "#" },
                  { title: "Уведомления", href: "#" },
                  { title: "Профиль", href: pages["profile"] },
                  { title: "Настройки", href: pages["settings"] },
                  { title: "Выход", href: "#" },
                ]}
              />
            </div>

            <div className={b("children")}>{children}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
