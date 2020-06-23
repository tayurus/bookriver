import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// Регистрация
export const register = (email: string, name: string, password: string) => {
  const request = () => ({ type: userConstants.USER_REGISTER_REQUEST });
  const success = () => ({ type: userConstants.USER_REGISTER_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.USER_REGISTER_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const response: any = await API.post(`${endpoints.user.register}`, { email, name, password });
      message.success(response?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
