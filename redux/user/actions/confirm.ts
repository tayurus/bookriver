import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ ПО ЕМЕЙЛУ
export const confirm = (confirmToken: string) => {
  const request = () => ({ type: userConstants.USER_CONFIRM_REQUEST });
  const success = () => ({ type: userConstants.USER_CONFIRM_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_CONFIRM_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.user.confirm}`, { token: confirmToken });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
