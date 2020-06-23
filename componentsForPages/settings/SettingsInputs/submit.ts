import { SubmissionError } from "redux-form";
import { updateMePassword } from "~/redux/user";

export const submit = async (values, dispatch, ownProps) => {
  const { current_password, new_password } = values;
  const result = await dispatch(updateMePassword(current_password, new_password));
  if (result?.errors) {
    throw new SubmissionError(result.errors);
  }
};
