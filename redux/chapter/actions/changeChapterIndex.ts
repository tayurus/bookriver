import { chapterConstants } from "../chapter.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ////////////////// ИЗМЕНЕНИЕ ПОРЯДКОГО НОМЕРА ГЛАВЫ //////////////////////
export const changeChapterIndex = (chapter_id: number, newIndex: number) => {
  const { CHANGE_CHAPTER_INDEX_REQUEST, CHANGE_CHAPTER_INDEX_SUCCESS, CHANGE_CHAPTER_INDEX_FAILURE } = chapterConstants;
  const request = () => ({ type: CHANGE_CHAPTER_INDEX_REQUEST });
  const success = () => ({ type: CHANGE_CHAPTER_INDEX_SUCCESS });
  const failure = (message: string) => ({ type: CHANGE_CHAPTER_INDEX_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.chapter.changeIndex}${chapter_id}/number`, { number: newIndex });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
