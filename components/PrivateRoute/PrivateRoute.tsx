import React from "react";
import Router from "next/router";
import cookies from "next-cookies";
/* Компонент - приватный роут */
export const PrivateRoute = (WrappedComponent) => {
  // обернем пришедший компонент в обертку, которая принимает пропсы
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  // получим контекст, в котором есть куки
  hocComponent.getInitialProps = async (ctx) => {
    // извлечем объект res для перенаправления пользователя со стороны сервера
    const { res } = ctx;
    console.log("res = ", res);
    // если кук нет
    if (!cookies(ctx).token) {
      // если мы на сервере
      if (res) {
        // перенаправление с сервера
        res.writeHead(302, {
          Location: "/",
        });
        res.end();
      } else {
        // перенапправление на фронте
        Router.push("/");
      }
    }

    // заберем пропсы из getInitialProps переданного компонента
    const wrappedProps = await (WrappedComponent.getInitialProps && WrappedComponent.getInitialProps());

    // вернем пропсы
    return { ...wrappedProps };
  };

  // вернем обернутый компонент
  return hocComponent;
};
