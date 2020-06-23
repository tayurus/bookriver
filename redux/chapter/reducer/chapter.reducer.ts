import { chapterConstants } from "./../chapter.constants";
import { createReducer } from "@reduxjs/toolkit";
import { createChapterRequest, createChapterSuccess, createChapterFailure } from "./createChapter";
import { changeChapterIndexRequest, changeChapterIndexSuccess, changeChapterIndexFailure } from "./changeChapterIndex";
import { editChapterRequest, editChapterSuccess, editChapterFailure } from "./editChapter";
import {
  getChaptersByBookIDRequest,
  getChaptersByBookIDSuccess,
  getChaptersByBookIDFailure,
} from "./getChaptersByBookID";
import { deleteChapterRequest, deleteChapterSuccess, deleteChapterFailure } from "./deleteChapter";
const initialState = {
  currentChapter: {},
  loading: false,
  message: "",
  bookChapters: [],
};

export const chapterReducer = createReducer(initialState, {
  [chapterConstants.CREATE_CHAPTER_REQUEST]: createChapterRequest,
  [chapterConstants.CREATE_CHAPTER_SUCCESS]: createChapterSuccess,
  [chapterConstants.CREATE_CHAPTER_FAILURE]: createChapterFailure,

  [chapterConstants.GET_CHAPTERS_BY_BOOK_ID_REQUEST]: getChaptersByBookIDRequest,
  [chapterConstants.GET_CHAPTERS_BY_BOOK_ID_SUCCESS]: getChaptersByBookIDSuccess,
  [chapterConstants.GET_CHAPTERS_BY_BOOK_ID_FAILURE]: getChaptersByBookIDFailure,

  [chapterConstants.CHANGE_CHAPTER_INDEX_REQUEST]: changeChapterIndexRequest,
  [chapterConstants.CHANGE_CHAPTER_INDEX_SUCCESS]: changeChapterIndexSuccess,
  [chapterConstants.CHANGE_CHAPTER_INDEX_FAILURE]: changeChapterIndexFailure,

  [chapterConstants.EDIT_CHAPTER_REQUEST]: editChapterRequest,
  [chapterConstants.EDIT_CHAPTER_SUCCESS]: editChapterSuccess,
  [chapterConstants.EDIT_CHAPTER_FAILURE]: editChapterFailure,

  [chapterConstants.DELETE_CHAPTER_REQUEST]: deleteChapterRequest,
  [chapterConstants.DELETE_CHAPTER_SUCCESS]: deleteChapterSuccess,
  [chapterConstants.DELETE_CHAPTER_FAILURE]: deleteChapterFailure,
});
