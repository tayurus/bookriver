import fetch from "cross-fetch";
import { commentsConstants } from "../comments.constants";
import { baseURL, endpoints } from "~/constants/api";
import { handleFetchResponse } from "~/helpers/network";
import { message } from "antd";

// ////////////////// ПОЛУЧЕНИЕ КОММЕНАТРИЕВ //////////////////////
export const getComments = (target_class: string, target_id: number) => {
  const { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE } = commentsConstants;
  const request = () => ({ type: GET_COMMENTS_REQUEST });
  const success = (comments) => ({ type: GET_COMMENTS_SUCCESS, comments });
  const failure = (message: string) => ({ type: GET_COMMENTS_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const comments = await getCommentsService(target_class, target_id);
      dispatch(success(comments));
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};

// ////////////// СЕРВИС //////////////////////////////////
async function getCommentsService(target_class: string, target_id: number) {
  const options: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(`${baseURL}${endpoints.comments.get}${target_class}/${target_id}`, options);
  return handleFetchResponse(response);
}
