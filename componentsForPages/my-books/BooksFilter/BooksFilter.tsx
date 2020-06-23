import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
import { IProps, defaultProps, IState, getInitialValues } from "./interface";
import { FormSelect } from "~/helpers/antd-redux-form";
import { getCorrectWordFormByNumber } from "~/helpers/strings";
import { attributes } from "~/constants/attributes";
import { validate } from "~/componentsForPages/book-edit/DescriptionInputs/validate";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("books-filter");

const statusSelectOption = [
  { value: 0, title: "Завершена" },
  { value: 1, title: "В процессе" },
  { value: 2, title: "Опубликована" },
];

const genresSelectOptions = [
  { value: 0, title: "Жизненные ценности" },
  { value: 1, title: "Боевик" },
  { value: 2, title: "Приключения" },
  { value: 3, title: "Драма" },
  { value: 4, title: "Трагедия" },
  { value: 5, title: "Научная" },
  { value: 6, title: "Фантастика" },
  { value: 7, title: "Проза" },
  { value: 8, title: "Попаданцы" },
];

const sizesSelectOption = [
  { value: 0, title: "до 10 000 зн." },
  { value: 1, title: "до 30 000 зн." },
  { value: 2, title: "до 60 000 зн." },
  { value: 3, title: "до 100 000 зн." },
];

class BooksFilter extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <div className={b("input-wrapper", { status: true })}>
          <label htmlFor="" className={b("input-label")}>
            Статус:
          </label>
          <Field
            size="small"
            options={statusSelectOption}
            component={FormSelect}
            name={attributes["статус"]}
            className={b("select")}
          />
        </div>
        <div className={b("input-wrapper", { genres: true })}>
          <label htmlFor="" className={b("input-label")}>
            Жанр
          </label>
          <Field
            size="small"
            options={genresSelectOptions}
            component={FormSelect}
            name={attributes["жанр"]}
            className={b("select")}
            mode="tags"
            maxTagCount={3}
            maxTagPlaceholder={(values) => `+ ${values.length} ${getCorrectWordFormByNumber(values.length, ["жанр", "жанра", "жанров"])}`}
          />
        </div>

        <div className={b("input-wrapper", { size: true })}>
          <label htmlFor="" className={b("input-label")}>
            Размер:
          </label>
          <Field
            size="small"
            options={sizesSelectOption}
            component={FormSelect}
            name={attributes["размер"]}
            className={b("select")}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { data } = ownProps;
  const initialValues = getInitialValues(data);

  return { initialValues };
};

let connectedComponent: any = reduxForm({ form: "books-filter", enableReinitialize: true, validate })(BooksFilter);
connectedComponent = connect(mapStateToProps, null)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as BooksFilter };
