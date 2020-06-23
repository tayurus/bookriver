import { attributes } from "~/constants/attributes";
import { validateGenres, validateString } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validateGenres(values[attributes["жанры"]], errors);
  errors = validateString(values[attributes["аннотация"]], 50, 1000, attributes["аннотация"], errors, "Аннотация");
  errors = validateString(
    values[attributes["примечаниеАвтора"]],
    50,
    150,
    attributes["примечаниеАвтора"],
    errors,
    "Примечание автора"
  );

  return errors;
};
