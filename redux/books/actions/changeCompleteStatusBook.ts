import { booksConstants } from "../books.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ////////////////// ИЗМЕНЕНИЕ СТАТУСА ЗАВЕРШЕННОСТИ КНИГИ //////////////////////
export const changeCompleteStatusBook = (bookId: number, newStatus: string) => {
  const request = () => ({ type: booksConstants.CHANGE_COMPLETE_STATUS_BOOK_REQUEST });
  const success = () => ({ type: booksConstants.CHANGE_COMPLETE_STATUS_BOOK_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.CHANGE_COMPLETE_STATUS_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.book.changeCompleteStatus}${bookId}/complete`, {
        status_complete: newStatus,
      });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
