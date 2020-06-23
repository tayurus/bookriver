
import { validatePrice } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validatePrice(values["price"], errors);

  return errors;
};
