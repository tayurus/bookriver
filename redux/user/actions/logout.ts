import Router from "next/router";
import { userConstants } from "../user.constants";
import { setCookie } from "~/helpers/cookie";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// РАЗЛОГИН
export const logout = () => {
  const request = () => ({ type: userConstants.USER_LOGOUT_REQUEST });
  const success = () => ({ type: userConstants.USER_LOGOUT_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_LOGOUT_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      await API.post(`${endpoints.user.logout}`);
      Router.push("/");
      setCookie("user", "");
      setCookie("token", "");
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
