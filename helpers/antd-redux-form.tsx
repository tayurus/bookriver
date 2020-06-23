/*
Тут описывается обертка вокруг antd-компонентов, чтобы связать их с redux-form
Взято отсюда - https://codesandbox.io/s/jzyl70wpk
*/
import React from "react";
import { Input, Select, AutoComplete, Checkbox, Radio, RadioGroup, DatePicker } from "~/components";

const makeField = (Component: any) => ({ input, meta, children, ...rest }: any) => (
  <Component {...input} {...rest} meta={meta}>
    {children}
  </Component>
);

export const FormInput = makeField(Input);
export const FormAutoComplete = makeField(AutoComplete);
export const FormSelect = makeField(Select);
export const FormCheckbox = makeField(Checkbox);
export const FormRadioGroup = makeField(RadioGroup);
export const FormRadio = makeField(Radio);
export const FormDatePicker = makeField(DatePicker);
