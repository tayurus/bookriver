import { chapterConstants } from "./../chapter.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";
// УДАЛЕНИЕ ГЛАВЫ
export const deleteChapter = (chapter_id: number) => {
  const request = () => ({ type: chapterConstants.DELETE_CHAPTER_REQUEST });
  const success = () => ({ type: chapterConstants.DELETE_CHAPTER_SUCCESS });
  const failure = (message: string) => ({ type: chapterConstants.DELETE_CHAPTER_FAILURE, message });
  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.chapter.delete}${chapter_id}`);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
