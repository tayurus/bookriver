import { userConstants } from "./../user.constants";
import { getCookie } from "~/helpers/cookie";
import { createReducer } from "@reduxjs/toolkit";
import { logoutRequest, logoutSuccess, logoutFailure } from "./logout";
import { confirmRequest, confirmSuccess, confirmFailure } from "./confirm";
import { forgotRequest, forgotSuccess, forgotFailure } from "./forgot";
import { registerRequest, registerSuccess, registerFailure } from "./register";
import { resetRequest, resetSuccess, resetFailure } from "./reset";
import { updateUserRequest, updateUserSuccess, updateUserFailure } from "./updateUser";
import { updateMeRequest, updateMeSuccess, updateMeFailure } from "./updateMe";
import { getTokenRequest, getTokenSuccess, getTokenFailure } from "./getToken";
import { meRequest, meSuccess, meFailure } from "./me";
import { getRequest, getSuccess, getFailure } from "./get";
import {
  getProviderLoginURLRequest,
  getProviderLoginURLSuccess,
  getProviderLoginURLFailure,
} from "./getProviderLoginURL";
import { deleteMeRequest, deleteMeSuccess, deleteMeFailure } from "./deleteMe";
import { updateMePasswordRequest, updateMePasswordSuccess, updateMePasswordFailure } from "./updateMePassword";
import { disconnectProviderRequest, disconnectProviderSuccess, disconnectProviderFailure } from "./disconnectProvider";

let userInfo = { user: {} };
let initialState = {};

if (typeof window !== "undefined") {
  userInfo = JSON.parse(getCookie("user") || "{}");
  initialState = { message: "", user: userInfo, loading: false };
}

export const userReducer = createReducer(initialState, {
  [userConstants.USER_TOKEN_REQUEST]: getTokenRequest,
  [userConstants.USER_TOKEN_SUCCESS]: getTokenSuccess,
  [userConstants.USER_TOKEN_FAILURE]: getTokenFailure,

  [userConstants.USER_ME_REQUEST]: meRequest,
  [userConstants.USER_ME_SUCCESS]: meSuccess,
  [userConstants.USER_ME_FAILURE]: meFailure,

  [userConstants.USER_DELETE_ME_REQUEST]: deleteMeRequest,
  [userConstants.USER_DELETE_ME_SUCCESS]: deleteMeSuccess,
  [userConstants.USER_DELETE_ME_FAILURE]: deleteMeFailure,

  [userConstants.USER_LOGOUT_REQUEST]: logoutRequest,
  [userConstants.USER_LOGOUT_SUCCESS]: logoutSuccess,
  [userConstants.USER_LOGOUT_FAILURE]: logoutFailure,

  [userConstants.USER_CONFIRM_REQUEST]: confirmRequest,
  [userConstants.USER_CONFIRM_SUCCESS]: confirmSuccess,
  [userConstants.USER_CONFIRM_FAILURE]: confirmFailure,

  [userConstants.USER_FORGOT_REQUEST]: forgotRequest,
  [userConstants.USER_FORGOT_SUCCESS]: forgotSuccess,
  [userConstants.USER_FORGOT_FAILURE]: forgotFailure,

  [userConstants.USER_REGISTER_REQUEST]: registerRequest,
  [userConstants.USER_REGISTER_SUCCESS]: registerSuccess,
  [userConstants.USER_REGISTER_FAILURE]: registerFailure,

  [userConstants.USER_RESET_REQUEST]: resetRequest,
  [userConstants.USER_RESET_SUCCESS]: resetSuccess,
  [userConstants.USER_RESET_FAILURE]: resetFailure,

  [userConstants.USER_UPDATE_REQUEST]: updateUserRequest,
  [userConstants.USER_UPDATE_SUCCESS]: updateUserSuccess,
  [userConstants.USER_UPDATE_FAILURE]: updateUserFailure,

  [userConstants.USER_UPDATE_ME_REQUEST]: updateMeRequest,
  [userConstants.USER_UPDATE_ME_SUCCESS]: updateMeSuccess,
  [userConstants.USER_UPDATE_ME_FAILURE]: updateMeFailure,

  [userConstants.USER_UPDATE_ME_PASSWORD_REQUEST]: updateMePasswordRequest,
  [userConstants.USER_UPDATE_ME_PASSWORD_SUCCESS]: updateMePasswordSuccess,
  [userConstants.USER_UPDATE_ME_PASSWORD_FAILURE]: updateMePasswordFailure,

  [userConstants.USER_GET_REQUEST]: getRequest,
  [userConstants.USER_GET_SUCCESS]: getSuccess,
  [userConstants.USER_GET_FAILURE]: getFailure,

  [userConstants.GET_PROVIDER_LOGIN_URL_REQUEST]: getProviderLoginURLRequest,
  [userConstants.GET_PROVIDER_LOGIN_URL_SUCCESS]: getProviderLoginURLSuccess,
  [userConstants.GET_PROVIDER_LOGIN_URL_FAILURE]: getProviderLoginURLFailure,

  [userConstants.DISCONNECT_PROVIDER_REQUEST]: disconnectProviderRequest,
  [userConstants.DISCONNECT_PROVIDER_SUCCESS]: disconnectProviderSuccess,
  [userConstants.DISCONNECT_PROVIDER_FAILURE]: disconnectProviderFailure,
});
