import { booksConstants } from "../books.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// СОЗДАНИЕ КНИГИ
export const renameBook = (bookId: number, newName: string) => {
  const request = () => ({ type: booksConstants.RENAME_BOOK_REQUEST });
  const success = () => ({ type: booksConstants.RENAME_BOOK_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.RENAME_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.put(`${endpoints.book.rename}${bookId}/name`, { name: newName });
      dispatch(success());
      result?.message && message.success(result?.message);
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
