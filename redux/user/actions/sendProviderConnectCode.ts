import { userConstants } from "./../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ОТПРАВКА КОДА ОТ СОЦ СЕТИ НА БЕК ПРИ ПРИВЯЗКЕ
export const sendProviderConnectCode = (provider: string, code: string) => {
  const request = () => ({ type: userConstants.SEND_PROVIDER_CONNECT_CODE_REQUEST });
  const success = () => ({ type: userConstants.SEND_PROVIDER_CONNECT_CODE_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.SEND_PROVIDER_CONNECT_CODE_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const response: any = await API.post(`${endpoints.user.connectProviderCallback}${provider}/callback`, { code });
      message.success(response?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      throw new Error("Беда");
    }
  };
};
