import { userConstants } from "../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ОТВЯЗЫВАНИЕ АККАУНТА СОЦ СЕТИ
export const disconnectProvider = (provider: string) => {
  const request = () => ({ type: userConstants.DISCONNECT_PROVIDER_REQUEST });
  const success = () => ({ type: userConstants.DISCONNECT_PROVIDER_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.DISCONNECT_PROVIDER_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.user.disconnectProvider}${provider}`);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
