import { booksConstants } from "./../books.constants";
import { API, endpoints } from "~/constants/api";
import { message } from "antd";

// ИЗМЕНЕНИЕ СТОИМОСТИ КНИГИ
export const editPriceBook = (book_id: number, price: number, free: boolean | string) => {
  const request = () => ({ type: booksConstants.EDIT_PRICE_BOOK_REQUEST });
  const success = () => ({ type: booksConstants.EDIT_PRICE_BOOK_SUCCESS });
  const failure = (message: string) => ({ type: booksConstants.EDIT_PRICE_BOOK_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const body = {};
      body["price"] = +price;
      body["free"] = free === "false" ? false : true;
      const result: any = await API.put(`${endpoints.book.editPrice}${book_id}/price`, body);
      dispatch(success());
      result?.message && message.success(result?.message);
    } catch (err) {
      message.error(err.message);
      dispatch(failure(err.message));
      return err;
    }
  };
};
