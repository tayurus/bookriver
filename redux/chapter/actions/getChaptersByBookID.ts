import { chapterConstants } from "../chapter.constants";
import { endpoints, API } from "~/constants/api";
import { IChapter } from "~/types";
import { message } from "antd";

// ПОЛУЧЕНИЕ ГЛАВ КНИГИ
export const getChaptersByBookID = (book_id: number) => {
  const request = () => ({ type: chapterConstants.GET_CHAPTERS_BY_BOOK_ID_REQUEST });
  const success = (chapters: IChapter) => ({ type: chapterConstants.GET_CHAPTERS_BY_BOOK_ID_SUCCESS, chapters });
  const failure = (message: string) => ({ type: chapterConstants.GET_CHAPTERS_BY_BOOK_ID_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const chapters: IChapter = await API.get(`${endpoints.chapter.getByBookID}${book_id}`);
      dispatch(success(chapters));
      return chapters;
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
