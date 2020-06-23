import { booksConstants } from "./../books.constants";
import { API, endpoints } from "~/constants/api";

//////////////////// ПОЛУЧЕНИЕ КНИГИ //////////////////////
export const getBook = (book_id: number) => {
  const { GET_BOOK_REQUEST, GET_BOOK_SUCCESS, GET_BOOK_FAILURE } = booksConstants;
  const request = () => ({ type: GET_BOOK_REQUEST });
  const success = (currentBook) => ({ type: GET_BOOK_SUCCESS, currentBook });
  const failure = (message: string) => ({ type: GET_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const currentBook = await API.get(`${endpoints.book.get}${book_id}`);
      dispatch(success(currentBook));
    } catch (err) {
      dispatch(failure(err.message));
    }
  };
};
