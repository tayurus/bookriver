import { userConstants } from "./../user.constants";
import { setCookie } from "~/helpers/cookie";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ОТПРАВКА КОДА ОТ СОЦ СЕТИ НА БЕК ПРИ АВТОРИЗАЦИИ
export const sendProviderLoginCode = (provider: string, code: string) => {
  const request = () => ({ type: userConstants.SEND_PROVIDER_LOGIN_CODE_REQUEST });
  const success = () => ({ type: userConstants.SEND_PROVIDER_LOGIN_CODE_SUCCESS });
  const failure = (message: string) => ({ type: userConstants.SEND_PROVIDER_LOGIN_CODE_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.user.loginProviderCallback}${provider}/callback`, { code });
      const { access_token: token } = result;
      setCookie("token", token, { expires: 3600, path: "/" });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      throw new Error("Беда");
    }
  };
};
