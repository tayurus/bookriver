import { booksConstants } from "../books.constants";
import { API, endpoints } from "~/constants/api";
import { message } from "antd";

//УДАЛЕНИЕ КНИГИ
export const deleteBook = (bookId: number) => {
  const request = () => ({ type: booksConstants.DELETE_BOOK_REQUEST });
  const success = () => ({ type: booksConstants.DELETE_BOOK_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.DELETE_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.book.delete}${bookId}`);
      dispatch(success());
      result?.message && message.success(result?.message);
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
      throw Error();
    }
  };
};
