import { userConstants } from "./../user.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ПРИВЯЗКА К СОЦ.СЕТИ
export const getProviderConnectURL = (provider: string) => {
  const request = () => ({ type: userConstants.GET_PROVIDER_CONNECT_URL_REQUEST });
  const success = (url: Object) => ({ type: userConstants.GET_PROVIDER_CONNECT_URL_SUCCESS, url });
  const failure = (message: string) => ({ type: userConstants.GET_PROVIDER_CONNECT_URL_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const url: any = await API.get(`${endpoints.user.connectProvider}${provider}`);
      dispatch(success(url));
      return url.redirect_url;
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
