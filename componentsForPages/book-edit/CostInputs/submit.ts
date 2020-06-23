import { SubmissionError } from "redux-form";
import { editPriceBook } from "~/redux/books";

export const submit = async (values, dispatch, ownProps) => {
  const { book_id } = ownProps;
  const { price, free } = values;
  const result = await dispatch(editPriceBook(book_id, free === "true" ? undefined : price, free));
  if (result?.errors) {
    throw new SubmissionError(result.errors);
  }
};
