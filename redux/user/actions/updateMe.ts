import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { IUserData } from "~/types";
import { message } from "antd";

// ОБНОВЛЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ (себя) (страница "Профиль")
export const updateMe = (newUserData: IUserData) => {
  const request = () => ({ type: userConstants.USER_UPDATE_ME_REQUEST });
  const success = () => ({ type: userConstants.USER_UPDATE_ME_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_UPDATE_ME_FAILURE, message });
  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.user.updateMe}`, newUserData);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      return err;
    }
  };
};
