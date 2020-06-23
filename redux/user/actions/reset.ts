import Router from "next/router";
import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// СБРОС ПАРОЛЯ
export const reset = (password: string, resetToken: string) => {
  const request = () => ({ type: userConstants.USER_RESET_REQUEST });
  const success = () => ({ type: userConstants.USER_RESET_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_RESET_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.user.reset}`, { password, token: resetToken });
      result?.message && message.success(result?.message);
      dispatch(success());
      Router.push({ pathname: "/", query: { login: "true" } });
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
