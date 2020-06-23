import { userConstants } from "../user.constants";
import { setCookie } from "~/helpers/cookie";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ПОЛУЧЕНИЕ JWT ТОКЕНА при авторизации
export const getToken = (email: string, password: string, rememberMe = 0) => {
  const request = () => ({ type: userConstants.USER_TOKEN_REQUEST });
  const success = () => ({ type: userConstants.USER_TOKEN_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_TOKEN_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const response: any = await API.post(`${endpoints.user.token}`, { email, password, rememberMe });
      const { access_token: token } = response;
      setCookie("token", token, { expires: 3600, path: "/" });
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      throw new Error("Беда");
    }
  };
};
