import fetch from "cross-fetch";
import { commentsConstants } from "../comments.constants";
import { baseURL, endpoints } from "~/constants/api";
import { handleFetchResponse } from "~/helpers/network";
import { ICommentCreate } from "~/types";
import { message } from "antd";

// ////////////////// ДОБАВЛЕНИЕ КОММЕНАТРИЯ //////////////////////
export const addComment = (commentData: ICommentCreate) => {
  const { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } = commentsConstants;
  const request = () => ({ type: ADD_COMMENT_REQUEST });
  const success = () => ({ type: ADD_COMMENT_SUCCESS });
  const failure = (message: string) => ({ type: ADD_COMMENT_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result = await addCommentService(commentData);
      dispatch(success());
      message.success(result.message);
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};

// ////////////// СЕРВИС //////////////////////////////////
async function addCommentService(commentData: ICommentCreate) {
  const body = new FormData();
  Object.keys(commentData).forEach((key: string) => body.append(key, commentData[key]?.toString()));

  const options: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
    body,
  };

  const response = await fetch(`${baseURL}${endpoints.comments.add}`, options);
  return handleFetchResponse(response);
}
