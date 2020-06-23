import { attributes } from "~/constants/attributes";
import { validatePassword, validateEmail, validateName } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validateEmail(values[attributes["электроннаяПочта"]], errors);
  errors = validatePassword(attributes["пароль"], values[attributes["пароль"]], errors);
  errors = validateName(values["name"], errors);

  return errors;
};
