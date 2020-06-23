import { validateString } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validateString(values.name, 2, 150, "name", errors, "Название книги");

  return errors;
};
