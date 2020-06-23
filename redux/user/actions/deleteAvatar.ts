import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// УДАЛЕНИЕ АВАТАРКИ ПОЛЬЗОВАТЕЛЯ
export const deleteAvatar = () => {
  const request = () => ({ type: userConstants.DELETE_USER_AVATAR_REQUEST });
  const success = () => ({ type: userConstants.DELETE_USER_AVATAR_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.DELETE_USER_AVATAR_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.user.deleteAvatar}`);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
