import { SubmissionError } from "redux-form";
import { updateMe, me } from "~/redux/user";

export const submit = async (values, dispatch, ownProps) => {
  const result = await dispatch(updateMe(values));
  if (result?.errors) {
    throw new SubmissionError(result.errors);
  } else {
    dispatch(me());
  }
};
