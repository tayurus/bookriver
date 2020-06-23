import { chapterConstants } from "../chapter.constants";
import { endpoints, API } from "~/constants/api";
import { IChapterCreate } from "~/types";
import { message } from "antd";

// СОЗДАНИЕ ГЛАВЫ
export const createChapter = ({ book_id, name, free, content }: IChapterCreate) => {
  const request = () => ({ type: chapterConstants.CREATE_CHAPTER_REQUEST });
  const success = () => ({ type: chapterConstants.CREATE_CHAPTER_SUCCESS });
  const failure = (message: string) => ({ type: chapterConstants.CREATE_CHAPTER_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const createdChapter = await API.post(`${endpoints.chapter.create}`, {
        book_id,
        name,
        free,
        content,
      });
      dispatch(success());
      message.success("Глава создана");
      return createdChapter["id"];
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      throw Error("Error");
    }
  };
};
