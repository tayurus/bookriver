import { booksConstants } from "../books.constants";
import { API, endpoints } from "~/constants/api";
import { IBookCreate } from "~/types";
import { message } from "antd";

// СОЗДАНИЕ КНИГИ
export const createBook = ({ name, cycle_id }: IBookCreate) => {
  const request = () => ({ type: booksConstants.CREATE_BOOK_REQUEST });
  const success = () => ({ type: booksConstants.CREATE_BOOK_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.CREATE_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.book.create}`, { name, cycle_id });
      dispatch(success());
      result?.message && message.success(result?.message);
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
