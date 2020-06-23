import React from "react";
import { withNaming } from "@bem-react/classname";
import { PrivateRoute } from "~/components";
import { Notification } from "~/shared-components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("notifications-page");

const mocks = {
  cart: {
    title: "Ветер Севера",
    id: "46824824599",
    userName: "Роман Романович",
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    avatarImg: "https://api.bbookriver.ru/storage/images/users/1/avatar/y3Mj5nr9KzGnsFFAs5xQ5Ynf1LpGDE3FQv6d1Khz.png?w=50&h=50",
    isBookCover: true,
    userAction: "снял с публикации произведение",
    bookName: "Война Родов",
    time: "12.12.2020 в 15:34",
    isNew: false,
  },
};

class NotificationsPage extends React.Component<any, any> {
  render() {
    return (
      <div className={b()}>
        <h2>Уведомления</h2>
        <div className={b("wrap")}>
          <Notification {...mocks.cart} />
        </div>
        <div className={b("wrap-show-btn")}>
          <button className={b("show-btn")}>Показать предыдущие 50 уведомлений</button>
        </div>
        .
      </div>
    );
  }
}

export default PrivateRoute(NotificationsPage);
