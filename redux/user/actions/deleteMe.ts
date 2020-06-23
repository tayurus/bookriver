import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { setCookie } from "~/helpers/cookie";
import { message } from "antd";

// САМОЛИКЦИДАЦИЯ ПОЛЬЗОВАТЕЛЯ
export const deleteMe = () => {
  const request = () => ({ type: userConstants.USER_DELETE_ME_REQUEST });
  const success = () => ({ type: userConstants.USER_DELETE_ME_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_DELETE_ME_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.user.deleteMe}`);
      setCookie("user", "");
      setCookie("token", "");
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
