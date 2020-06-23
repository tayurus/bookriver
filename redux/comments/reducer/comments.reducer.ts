import { commentsConstants } from "./../comments.constants";
import { createReducer } from "@reduxjs/toolkit";
import { addCommentRequest, addCommentSuccess, addCommentFailure } from "./addComment";
import { getCommentsRequest, getCommentsSuccess, getCommentsFailure } from "./getComments";

const initialState = {
  loading: false,
  message: "",
};

export const commentsReducer = createReducer(initialState, {
  [commentsConstants.ADD_COMMENT_REQUEST]: addCommentRequest,
  [commentsConstants.ADD_COMMENT_SUCCESS]: addCommentSuccess,
  [commentsConstants.ADD_COMMENT_FAILURE]: addCommentFailure,

  [commentsConstants.GET_COMMENTS_REQUEST]: getCommentsRequest,
  [commentsConstants.GET_COMMENTS_SUCCESS]: getCommentsSuccess,
  [commentsConstants.GET_COMMENTS_FAILURE]: getCommentsFailure,
});
