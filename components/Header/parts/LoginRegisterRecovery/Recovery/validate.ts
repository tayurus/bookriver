import { attributes } from "~/constants/attributes";
import { validateEmail } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validateEmail(values[attributes["электроннаяПочта"]], errors);

  return errors;
};
