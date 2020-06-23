import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState, IForm, getInitialValues } from "./interface";
import { Button, Label, AuthorShortView } from "~/components";
import { Field, reduxForm, InjectedFormProps, formValueSelector } from "redux-form";
import { Input } from "antd";
import { FormSelect, FormRadioGroup, FormRadio, FormInput } from "~/helpers/antd-redux-form";
import { attributes } from "~/constants/attributes";
import { connect } from "react-redux";
import { validate } from "./validate";

import { submit } from "./submit";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("cost-inputs");
const FORM_NAME = "cost";

const currenciesSelectOptions = [
  { value: "0", title: "Руб." },
  { value: "1", title: "Usd." },
  { value: "2", title: "Eur." },
];

const freeChaptersCountSelectOptions = [
  { value: "0", title: "1" },
  { value: "1", title: "2" },
  { value: "3", title: "3" },
  { value: "4", title: "4" },
  { value: "5", title: "5" },
];

class CostInputs extends React.Component<IProps & InjectedFormProps<IForm, IProps>, IState> {
  render() {
    const { className, free, price, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(submit)} className={classNames(b(), className)}>
        <div className={b("radio-group-wrapper")}>
          <Field name={"free"} component={FormRadioGroup} className={b("radio-group")}>
            <Field type="radio" name={"free"} value={"true"} title="Бесплатная" component={FormRadio} />
            <Field type="radio" name={"free"} value={"false"} title="Платная" component={FormRadio} />
          </Field>
          <Label tip="Текст, рекомендующий в каком случае стоит сделать книгу платной" />
        </div>

        {(free === "false" || free === false) && (
          <>
            <Label text="Стоимость" className={b("price-label")} />
            <div className={b("price-wrapper")}>
              <Input.Group compact className={b("price-input-group")}>
                <Field className={b("price-input")} size="small" name={"price"} type="number" component={FormInput} />
                <Field
                  className={b("currency-select")}
                  size="small"
                  name={attributes["валюта"]}
                  component={FormSelect}
                  options={currenciesSelectOptions}
                />
              </Input.Group>

              <Label
                text={`Доход с 1 продажи — ${Math.floor(price - price / 10)} руб.`}
                tip="Комиссия сервиса 10%. Мы тратим 5% на рекламу ваших книг"
              />
            </div>
            <Field
              className={b("free-chapters-select")}
              size="small"
              title="Количество глав доступно бесплатно"
              name={attributes["количествоБесплатныхГлав"]}
              component={FormSelect}
              options={freeChaptersCountSelectOptions}
            />
            <Label text="Комиссия соавторов" className={b("coauthors-label")} />
            <div className={b("coauthor-row")}>
              <AuthorShortView className={b("coauthor-view")} authorName="Константин Константинов" />
              <div className={b("coauthor-role")}>Соавтор</div>
              <Field
                size="small"
                name={attributes["комиссияСоавтора"]}
                component={FormInput}
                className={b("coauthor-fee")}
                parse={(v: string) =>
                  (v.replace(/[^0-9\.]/g, "") + "%").replace(/([1-9]0[1-9]|[1-9]{2}\d|[2-9]\d{2}|\d{4,})\s*%/, "100%")
                }
              />
            </div>
          </>
        )}

        <Button htmlType={"submit"} size="small" className={b("save-btn")}>
          Сохранить
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { data } = ownProps;
  const initialValues = getInitialValues(data);
  const formValues = formValueSelector(FORM_NAME);
  const free = formValues(state, "free");
  const price = formValues(state, "price");
  const book_id = state.books?.currentBook?.id;

  return { initialValues, free, price, book_id };
};

const mapDispatchToProps = (dispatch) => ({});

let connectedComponent: any = reduxForm({ form: FORM_NAME, enableReinitialize: true, validate })(CostInputs);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as CostInputs };
