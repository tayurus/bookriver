/* В этом файле описаны функции, которые проверяют значения в инпутах.
 * Как правило, эти функции используются в файлах validate.ts для redux-form */

import validator from "validator";
import * as moment from "moment";
import { attributes } from "~/constants/attributes";

export const validateEmail = (value: string, errors: Record<string, string>) => {
  if (!value || validator.isEmpty(value)) {
    errors[attributes["электроннаяПочта"]] = "Почтовый адрес обязателен к заполнению";
    return errors;
  }

  if (!validator.isEmail(value)) {
    errors[attributes["электроннаяПочта"]] = "Почтовый адрес должен быть корректным";
    return errors;
  }

  return errors;
};

export const validateName = (value: string, errors: Record<string, string>) => {
  if (!value || validator.isEmpty(value)) {
    errors["name"] = "Имя обязательно к заполнению";
    return errors;
  }

  return errors;
};

export const validatePrice = (value: number, errors: Record<string, string>) => {
  if (typeof value === "undefined") {
    errors["price"] = "Цена обязательна к заполнению";
    return errors;
  }

  if (!validator.isFloat(value.toString())) {
    errors["price"] = "Неверный формат цены";
  }

  return errors;
};

export const validateGenres = (genres: Array<string>, errors: Record<string, string>) => {
  if (genres && genres.length === 0) {
    errors[attributes["жанры"]] = "Нужно выбрать хотя бы один жанр";
    return errors;
  }

  if (genres && genres.length > 3) {
    errors[attributes["жанры"]] = "Можно выбрать не более 3 жанров";
    return errors;
  }
  return errors;
};

export const validateString = (
  value: string,
  minLength = 0,
  maxLength = 100,
  attribute: string,
  errors: Record<string, string>,
  fieldName: string
) => {
  if (!value || validator.isEmpty(value)) {
    errors[attribute] = `Поле '${fieldName}' обязательно к заполнению`;
    return errors;
  }

  if (value && value.length > 1000) {
    errors[attribute] = `Поле '${fieldName}' не может быть длиннее ${maxLength} символов`;
    return errors;
  }

  if (value && value.length < minLength) {
    errors[attribute] = `Поле '${fieldName}' не может быть короче ${minLength} символов`;
    return errors;
  }

  return errors;
};

export const validatePassword = (attribute: string, value: string, errors: any) => {
  if (value) {
    // if (value.length < 4) {
    //   errors[attribute] = "Длина пароля должна быть не меньше 4 символов";
    //   return errors;
    // }
    //
    // const numberRegex = /\d/gi;
    // if (!numberRegex.test(value)) {
    //   errors[attribute] = "Пароль должен содержать хотя бы одну цифру";
    //   return errors;
    // }
    //
    // if (value.toLowerCase() === value || value.toUpperCase() === value) {
    //   errors[attribute] = "Пароль должен содержать символы разных регистров";
    //   return errors;
    // }
    //
    return errors;
  }
  errors[attribute] = "Обязательное поле";
  return errors;
};

export const validateDate = (attribute: any, date: moment.Moment, errors: any) => {
  if (!date) {
    errors[attribute] = "Обязательное поле";
  }
  return errors;
};
