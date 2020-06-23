import React from "react";
import { withNaming } from "@bem-react/classname";
import { Header, Footer } from "../../components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("common-layout-container");

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

export class CommonLayoutContainer extends React.Component<any, any> {
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
          <div className={b("children")}>{children}</div>
        </div>
        <Footer />
      </>
    );
  }
}
