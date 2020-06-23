import React from "react";
import "./styles.scss";
import "./index.scss";
import { UserAccountLayout, CommonLayout, CommonLayoutContainer, ReaderLayout } from "~/layouts";
// import { ConfigProvider } from "antd";
// import ru_RU from "antd/es/locale-provider/ru_RU";
import { Provider } from "react-redux";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { pages } from "~/constants/pages";
import { ErrorCatcher, Loader } from "~/components";
import App from "next/app";
import { wrapper } from "~/redux/store";

/* Возвращает нужный Layout в зависимости от адресной строки */
const getLayout = (pathname: string, Component: any) => {
  if (pathname.startsWith(pages.reader)) {
    return <ReaderLayout>{Component}</ReaderLayout>;
  }
  if (
    pathname.startsWith(pages.author.as) ||
    pathname.startsWith(pages["my-books"]) ||
    pathname.startsWith("/playground") ||
    pathname.startsWith("/cart") ||
    // TODO: нужно придумать более адекватную проверку, чем дописывать '/'
    pathname.startsWith(`${pages["book"]}/`) ||
    pathname === "/"
  ) {
    return <CommonLayoutContainer>{Component}</CommonLayoutContainer>;
  } else if (pathname === "/") {
    return <CommonLayout>{Component}</CommonLayout>;
  }
  return <UserAccountLayout>{Component}</UserAccountLayout>;
};

// function MyApp({ Component, pageProps, ...rest }) {
//   return (
//     // <ConfigProvider locale={ru_RU}>
//     <ErrorCatcher>
//       <Provider store={store}>
//         <Loader />
//         {getLayout(rest.router.pathname, <Component {...pageProps} />)}
//       </Provider>
//     </ErrorCatcher>
//     // </ConfigProvider>
//   );
// }

class WrappedApp extends App {
  render() {
    const { Component, pageProps, ...rest } = this.props;
    return (
      <>
        <Loader />
        {getLayout(rest.router.pathname, <Component {...pageProps} />)}
      </>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
