import { userConstants } from "./../user.constants";
import { endpoints, API } from "~/constants/api";

// ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЯ ПО USERNAME
export const get = (username: string) => {
  const request = () => ({ type: userConstants.USER_GET_REQUEST });
  const success = (userInfo: Object) => ({ type: userConstants.USER_GET_SUCCESS, userInfo });
  const failure = (message: string) => ({ type: userConstants.USER_GET_FAILURE, message });
  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const userInfo = await API.get(`${endpoints.user.get}${username}`);
      dispatch(success(userInfo));
      return userInfo;
    } catch (err) {
      dispatch(failure(err.message));
      return {};
    }
  };
};
