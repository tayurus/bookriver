import React from "react";
import Link from "next/link";
import { Avatar, Dropdown, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { NavMenu } from "~/components";
import { IProps } from "../interface";
import { Login } from "./LoginRegisterRecovery/Login/Login";
import { Register } from "./LoginRegisterRecovery/Register/Register";
import { Recovery } from "./LoginRegisterRecovery/Recovery/Recovery";
import defaultUserIcon from "~/static/Header/defaultUserIcon.svg";
import { pages } from "~/constants/pages";
import { Messages } from "~/components/Header/parts/Messages";
import { Notifications } from "~/components/Header/parts/Notifications";
import { Basket } from "~/components/Header/parts/Basket";

export const renderUserInfo = (props: IProps, b: Function, parentContext: any, loggedIn: boolean) => {
  const {
    userBooks,
    user: { photo_url, name },
    logout,
  } = props;

  const userOverlay = (
    <div className={b("overlay", { user: true })}>
      <Link href={pages.profile}>
        <a className={b("label", { primary: true, user: true })}>{name}</a>
      </Link>
      {/* <Link href={pages.books}> */}
      {/*  <a className={b("label", { primary: true, user: true })}>Личный кабинет</a> */}
      {/* </Link> */}
      {/* <Link href="/"> */}
      {/*  <a className={b("label", { primary: true, user: true })}>Мои произведения</a> */}
      {/* </Link> */}

      {/* <div className={b("books-list")}> */}
      {/*  {userBooks.map((it: IBook, index) => ( */}
      {/*    <BookPreview className={b("book")} withTitle {...it} key={`book-preview-${index}`} /> */}
      {/*  ))} */}
      {/* </div> */}
      <div className={b("icons-profile")}>
        <div className={b("icons-wrapper", { mobile: true })}>
          <Messages {...props} b={b} />
          <Notifications {...props} b={b} />
          <Basket {...props} b={b} />
        </div>
      </div>

      {/* <Link href="/"> */}
      {/*  <a className={b("label", { primary: true, user: true })}>Личный кабинет</a> */}
      {/* </Link> */}
      {/* <Link href="/"> */}
      {/*  <a className={b("label", { primary: true, user: true })}>Мои произведения</a> */}
      {/* </Link> */}

      <NavMenu
        className={b("mobile-user-nav")}
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
          { title: "Выход", href: "#", onClick: logout },
        ]}
      />

      {/* <span className={b("label", { logout: true, gray: true })} onClick={logout}> */}
      {/*  Выход */}
      {/* </span> */}
    </div>
  );

  return (
    <div className={b("user-info")}>
      {loggedIn ? (
        <Dropdown overlay={userOverlay} trigger={["click"]}>
          <a className={b("link")}>
            <Avatar className={b("avatar")} src={`${photo_url}?w=50&h=50` || defaultUserIcon} />
            <FontAwesomeIcon icon={faSortDown} className={b("arrow")} />
          </a>
        </Dropdown>
      ) : (
        <div>
          <div className={b("avatar-wrapper")}>
            <Avatar className={b("avatar")} src={defaultUserIcon} />
            <a
              className={b("label", { primary: true, enter: true })}
              onClick={() => parentContext.toggleModalVisible("enter")}
            >
              Войти
            </a>
          </div>
          <Modal
            className={b("modal")}
            footer={null}
            onCancel={() => parentContext.toggleModalVisible("enter")}
            visible={parentContext.state["enterModalVisible"]}
          >
            <Login
              onRecoveryClick={() => parentContext.toggleModalVisible("recovery")}
              onRegisterClick={() => parentContext.toggleModalVisible("register")}
            />
          </Modal>
          <Modal
            className={b("modal")}
            footer={null}
            onCancel={() => parentContext.toggleModalVisible("register")}
            visible={parentContext.state["registerModalVisible"]}
          >
            <Register onEnterClick={() => parentContext.toggleModalVisible("enter")} />
          </Modal>
          <Modal
            className={b("modal")}
            footer={null}
            onCancel={() => parentContext.toggleModalVisible("recovery")}
            visible={parentContext.state["recoveryModalVisible"]}
          >
            <Recovery onEnterClick={() => parentContext.toggleModalVisible("enter")} />
          </Modal>
        </div>
      )}
    </div>
  );
};
