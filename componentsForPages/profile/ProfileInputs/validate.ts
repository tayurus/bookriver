import { attributes } from "~/constants/attributes";
import { validateString, validateDate } from "~/helpers/validators";

export const validate = (values: any, props: any) => {
  // ошибки для валидации
  let errors: Record<string, string> = {};

  errors = validateString(
    values[attributes["имяИФамилияИлиПсевдоним"]],
    2,
    100,
    attributes["имяИФамилияИлиПсевдоним"],
    errors,
    "Имя и фамилия"
  );

  errors = validateDate(attributes["датаРождения"], values["birthday"], errors);

  return errors;
};
