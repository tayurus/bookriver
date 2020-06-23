import { SubmissionError } from "redux-form";
import { updateBookProperties } from "~/redux/books";

export const submit = async (values, dispatch, ownProps) => {
  const { book_id } = ownProps;
  const result = await dispatch(updateBookProperties(book_id, { ...values }));
  if (result?.errors) {
    throw new SubmissionError(result.errors);
  }
};
