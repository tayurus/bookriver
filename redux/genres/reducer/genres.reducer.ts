import { createReducer } from "@reduxjs/toolkit";
import { genresConstants } from "../genres.constants";
import { getGenresRequest, getGenresSuccess, getGenresFailure } from "./getGenres";

const initialState = {
  genres: [],
  loading: false,
  message: "",
};

export const genresReducer = createReducer(initialState, {
  [genresConstants.GET_GENRES_REQUEST]: getGenresRequest,
  [genresConstants.GET_GENRES_SUCCESS]: getGenresSuccess,
  [genresConstants.GET_GENRES_FAILURE]: getGenresFailure,
});
