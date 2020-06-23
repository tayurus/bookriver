import { booksConstants } from "./../books.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// ПОЛУЧЕНИЕ КНИГИ
export const getBookLog = (book_id: number, page = 1) => {
  const request = () => ({ type: booksConstants.GET_BOOK_LOG_REQUEST });
  const success = (currentBookLog) => ({ type: booksConstants.GET_BOOK_LOG_SUCCESS, currentBookLog });
  const failure = (message: string) => ({ type: booksConstants.GET_BOOK_LOG_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const currentBookLog = await API.get(`${endpoints.book.getLog}${book_id}/logs?page=${page}`);
      dispatch(success(currentBookLog));
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
