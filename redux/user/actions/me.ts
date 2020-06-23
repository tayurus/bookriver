import { userConstants } from "../user.constants";
import { setCookie } from "~/helpers/cookie";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ПОЛУЧЕНИЕ ИНФОРМАЦИИ О СЕБЕ
export const me = () => {
  const request = () => ({ type: userConstants.USER_ME_REQUEST });
  const success = (userInfo: Object) => ({ type: userConstants.USER_ME_SUCCESS, userInfo });
  const failure = (message: string) => ({ type: userConstants.USER_ME_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const userInfo = await API.get(`${endpoints.user.me}`);
      setCookie("user", JSON.stringify(userInfo), { expires: 3600, path: "/" });
      dispatch(success(userInfo));
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
