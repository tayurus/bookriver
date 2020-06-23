import { chapterConstants } from "../chapter.constants";
import { endpoints, API } from "~/constants/api";
import { IChapterUpdate } from "~/types";
import { message } from "antd";

// РЕДАКТИРОВАНИЕ ГЛАВЫ
export const editChapter = (chapter_id: number, newChapterData: IChapterUpdate) => {
  const request = () => ({ type: chapterConstants.EDIT_CHAPTER_REQUEST });
  const success = () => ({ type: chapterConstants.EDIT_CHAPTER_SUCCESS });
  const failure = (message: string) => ({ type: chapterConstants.EDIT_CHAPTER_FAILURE, message });
  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.chapter.edit}${chapter_id}`, newChapterData);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
