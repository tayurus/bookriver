import { booksConstants } from "../books.constants";
import { endpoints } from "~/constants/api";
import { IBookUpdate } from "~/types";
import { message } from "antd";
import { API } from "~/constants/api";

// РЕДАКТИРОВАНИЕ КНИГИ
export const updateBookProperties = (bookId: number, bookUpdateData: IBookUpdate) => {
  const request = () => ({ type: booksConstants.UPDATE_BOOK_PROPERTIES_REQUEST });
  const success = () => ({ type: booksConstants.UPDATE_BOOK_PROPERTIES_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.UPDATE_BOOK_PROPERTIES_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.book.updateProperties}${bookId}/properties`, bookUpdateData);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(err.message);
      dispatch(failure(err.message));
      return err;
    }
  };
};
