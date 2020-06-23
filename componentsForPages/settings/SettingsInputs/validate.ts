import { validatePassword } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validatePassword("current_password", values["current_password"], errors);
  errors = validatePassword("new_password", values["new_password"], errors);

  return errors;
};
