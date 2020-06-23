import { createReducer } from "@reduxjs/toolkit";
import { booksConstants } from "../books.constants";
import { createBookRequest, createBookSuccess, createBookFailure } from "./createBook";
import { getBookRequest, getBookSuccess, getBookFailure } from "./getBook";
import {
  updateBookPropertiesRequest,
  updateBookPropertiesSuccess,
  updateBookPropertiesFailure,
} from "./updateBookProperties";
import { renameBookRequest, renameBookSuccess, renameBookFailure } from "./renameBook";
import { deleteBookRequest, deleteBookSuccess, deleteBookFailure } from "./deleteBook";
import {
  changePublishStatusBookRequest,
  changePublishStatusBookSuccess,
  changePublishStatusBookFailure,
} from "./changePublishStatusBook";
import {
  changeCompleteStatusBookRequest,
  changeCompleteStatusBookSuccess,
  changeCompleteStatusBookFailure,
} from "./changeCompleteStatusBook";
import { editPriceBookRequest, editPriceBookSuccess, editPriceBookFailure } from "./editPriceBook";
import { getBookPropertiesRequest, getBookPropertiesSuccess, getBookPropertiesFailure } from "./getBookProperties";
import { getBookLogRequest, getBookLogSuccess, getBookLogFailure } from "./getBookLog";

const initialState = {
  currentBook: {},
  message: "",
  loading: false,
};

export const bookReducer = createReducer(initialState, {
  [booksConstants.CREATE_BOOK_REQUEST]: createBookRequest,
  [booksConstants.CREATE_BOOK_SUCCESS]: createBookSuccess,
  [booksConstants.CREATE_BOOK_FAILURE]: createBookFailure,

  [booksConstants.GET_BOOK_REQUEST]: getBookRequest,
  [booksConstants.GET_BOOK_SUCCESS]: getBookSuccess,
  [booksConstants.GET_BOOK_FAILURE]: getBookFailure,

  [booksConstants.UPDATE_BOOK_PROPERTIES_REQUEST]: updateBookPropertiesRequest,
  [booksConstants.UPDATE_BOOK_PROPERTIES_SUCCESS]: updateBookPropertiesSuccess,
  [booksConstants.UPDATE_BOOK_PROPERTIES_FAILURE]: updateBookPropertiesFailure,

  [booksConstants.RENAME_BOOK_REQUEST]: renameBookRequest,
  [booksConstants.RENAME_BOOK_SUCCESS]: renameBookSuccess,
  [booksConstants.RENAME_BOOK_FAILURE]: renameBookFailure,

  [booksConstants.DELETE_BOOK_REQUEST]: deleteBookRequest,
  [booksConstants.DELETE_BOOK_SUCCESS]: deleteBookSuccess,
  [booksConstants.DELETE_BOOK_FAILURE]: deleteBookFailure,

  [booksConstants.CHANGE_PUBLISH_STATUS_BOOK_REQUEST]: changePublishStatusBookRequest,
  [booksConstants.CHANGE_PUBLISH_STATUS_BOOK_SUCCESS]: changePublishStatusBookSuccess,
  [booksConstants.CHANGE_PUBLISH_STATUS_BOOK_FAILURE]: changePublishStatusBookFailure,

  [booksConstants.CHANGE_COMPLETE_STATUS_BOOK_REQUEST]: changeCompleteStatusBookRequest,
  [booksConstants.CHANGE_COMPLETE_STATUS_BOOK_SUCCESS]: changeCompleteStatusBookSuccess,
  [booksConstants.CHANGE_COMPLETE_STATUS_BOOK_FAILURE]: changeCompleteStatusBookFailure,

  [booksConstants.EDIT_PRICE_BOOK_REQUEST]: editPriceBookRequest,
  [booksConstants.EDIT_PRICE_BOOK_SUCCESS]: editPriceBookSuccess,
  [booksConstants.EDIT_PRICE_BOOK_FAILURE]: editPriceBookFailure,

  [booksConstants.GET_BOOK_PROPERTIES_REQUEST]: getBookPropertiesRequest,
  [booksConstants.GET_BOOK_PROPERTIES_SUCCESS]: getBookPropertiesSuccess,
  [booksConstants.GET_BOOK_PROPERTIES_FAILURE]: getBookPropertiesFailure,

  [booksConstants.GET_BOOK_LOG_REQUEST]: getBookLogRequest,
  [booksConstants.GET_BOOK_LOG_SUCCESS]: getBookLogSuccess,
  [booksConstants.GET_BOOK_LOG_FAILURE]: getBookLogFailure,
});
