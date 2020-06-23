import { genresConstants } from "../genres.constants";
import { endpoints, API } from "~/constants/api";
import { IGenre } from "~/types";
import { message } from "antd";

// ПОЛУЧЕНИЕ ЖАНРОВ
export const getGenres = () => {
  const request = () => ({ type: genresConstants.GET_GENRES_REQUEST });
  const success = (genres: IGenre[]) => ({ type: genresConstants.GET_GENRES_SUCCESS, genres });
  const failure = (message: string) => ({ type: genresConstants.GET_GENRES_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const genres: any = await API.get(`${endpoints.genres.get}`);
      dispatch(success(genres));
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
