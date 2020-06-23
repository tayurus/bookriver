import { booksConstants } from "../books.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";
// ПОЛУЧЕНИЕ КНИГИ
export const getBookProperties = (book_id: number) => {
  const request = () => ({ type: booksConstants.GET_BOOK_PROPERTIES_REQUEST });
  const success = (currentBookProperties) => ({
    type: booksConstants.GET_BOOK_PROPERTIES_SUCCESS,
    currentBookProperties,
  });
  const failure = (message: string) => ({ type: booksConstants.GET_BOOK_PROPERTIES_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const currentBookProperties = await API.get(`${endpoints.book.getProperties}${book_id}/properties`);
      dispatch(success(currentBookProperties));
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
