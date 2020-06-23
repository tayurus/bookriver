import { booksConstants } from "../books.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

//ИЗМЕНЕНИЕ СТАТУСА ПУБЛИКАЦИИ КНИГИ
export const changePublishStatusBook = (bookId: number, newStatus: string) => {
  const request = () => ({ type: booksConstants.CHANGE_PUBLISH_STATUS_BOOK_REQUEST });
  const success = () => ({ type: booksConstants.CHANGE_PUBLISH_STATUS_BOOK_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.CHANGE_PUBLISH_STATUS_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.book.changePublishStatus}${bookId}/publish`, {
        status_publish: newStatus,
      });
      dispatch(success());
      result?.message && message.success(result?.message);
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
