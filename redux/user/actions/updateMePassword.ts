import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ОБНОВЛЕНИЕ ПАРОЛЯ ПОЛЬЗОВАТЕЛЯ
export const updateMePassword = (current_password: string, new_password: string) => {
  const request = () => ({ type: userConstants.USER_UPDATE_ME_PASSWORD_REQUEST });
  const success = () => ({ type: userConstants.USER_UPDATE_ME_PASSWORD_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_UPDATE_ME_PASSWORD_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.user.updateMePassword}`, { current_password, new_password });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      return err;
    }
  };
};
