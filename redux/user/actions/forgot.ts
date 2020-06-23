import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

//ВОССТАНОВЛЕНЕ ПАРОЛЯ ПО ЕМЕЙЛУ
export const forgot = (email: string) => {
  const request = () => ({ type: userConstants.USER_FORGOT_REQUEST });
  const success = () => ({ type: userConstants.USER_FORGOT_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_FORGOT_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.user.forgot}`, { email });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
