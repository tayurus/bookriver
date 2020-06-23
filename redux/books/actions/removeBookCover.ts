import { booksConstants } from "./../books.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

//////////////////// УДАЛЕНИЕ ОБЛОЖКИ КНИГИ //////////////////////
export const removeBookCover = (book_id: number) => {
  const request = () => ({ type: booksConstants.REMOVE_BOOK_COVER_REQUEST });
  const success = () => ({ type: booksConstants.REMOVE_BOOK_COVER_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.REMOVE_BOOK_COVER_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.book.deleteCover}${book_id}/cover`);
      dispatch(success());
      result?.message && message.success(result?.message);
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
