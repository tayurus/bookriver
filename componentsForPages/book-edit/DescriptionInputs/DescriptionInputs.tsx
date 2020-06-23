import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState, IForm, getInitialValues } from "./interface";
import { AutoComplete, Label, FileUpload, Button } from "~/components";
import { IOption } from "~/components/AutoComplete/interface";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { FormCheckbox, FormSelect, FormInput } from "~/helpers/antd-redux-form";
import { attributes } from "~/constants/attributes";
import { connect } from "react-redux";
import { validate } from "./validate";
import { getGenres } from "~/redux/genres";
import { ageSelectOptions, rolesSelectOptions } from "~/constants/inputs";
import { baseURL, endpoints } from "~/constants/api";
import { submit } from "./submit";
import { removeBookCover } from "~/redux/books";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("description-inputs");
const FORM_NAME = "description";
const authorAutocompleteOptions = [
  {
    value: 0,
    authorImg: "https://pickaface.net/gallery/avatar/20160628_214554_4973_PHILOSOPHER.png",
    authorName: "Константин Константинов",
  },
  {
    value: 1,
    authorImg: "https://orenlib.ru/up/news/2019/volteravatar1712.jpg",
    authorName: "Лев Толстой",
  },
  {
    value: 2,
    authorImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCaUnBMcKn3iTTj8ZyIQ5CF6VFddUPzbvN5U_aenidaXg8_Wi2&usqp=CAU",
    authorName: "Лев Худой",
  },
  {
    value: 3,
    authorImg:
      "https://lh3.googleusercontent.com/proxy/ejZwCV61gwtcxCi0cTr79cGovTAgUkAM2aPNAIp9mmMBWLrNDXtO9Dq6ilmHWyuMfSJuNlNqjEW2aw3-Q21EPNJp-0b1mBuXoH8jTA",
    authorName: "Лев Простой",
  },
];

const renderAuthorOptions = (options: any[]): IOption[] => {
  return options.map((it) => ({
    value: it.value,
    label: (
      <div className={b("autocomplete-option")} key={`author-options-${it.value}`}>
        <div
          className={b("autocomplete-author-img")}
          style={{ background: `url(${it["authorImg"]}) no-repeat center / contain` }}
        />
        <div className={b("autocomplete-author-name")}>{it["authorName"]}</div>
      </div>
    ),
  }));
};

class DescriptionInputs extends React.Component<IProps & InjectedFormProps<IForm, IProps>, IState> {
  componentDidMount(): void {
    const { getGenres } = this.props;
    getGenres();
  }

  render() {
    const { className, handleSubmit, genres, book_id, cover_url, removeBookCover } = this.props;
    return (
      <div className={classNames(b(), className)}>
        <FileUpload
          url={cover_url}
          action={`${baseURL}${endpoints.book.uploadCover}${book_id}/cover`}
          name={"image"}
          onRemove={() => removeBookCover(book_id)}
          className={b("image-uploader")}
        />

        <form className={b("right")} onSubmit={handleSubmit(submit)}>
          <Field
            name={attributes["являетсяОзнакомительнымФрагментом"]}
            component={FormCheckbox}
            title="Ознакомительный фрагмент"
            className={b("checkbox", { first: true })}
          />

          <Field
            name={"genres"}
            component={FormSelect}
            title="Жанры*"
            options={genres.map((it) => ({ value: it.id, title: it.name }))}
            mode="tags"
            className={b("field")}
            maxSelectedCount={3}
          />

          <Field
            name={"annotation"}
            component={FormInput}
            title="Аннотация*"
            type="textarea"
            className={b("field")}
            maxSymbolsCount={1000}
          />
          <Field
            name={"note"}
            component={FormInput}
            title="Примечание автора*"
            type="textarea"
            className={b("field")}
            maxSymbolsCount={150}
          />

          <Field
            name={"age_rating"}
            component={FormSelect}
            title="Возрастной рейтинг*"
            options={ageSelectOptions}
            className={b("field")}
          />

          <Field
            name={"is_foul_language"}
            component={FormCheckbox}
            title="Содержит нецензурную брань"
            className={b("checkbox")}
          />

          <Label className={b("label")} text="Теги" tip="Укажите теги длинный длинный текст подсказки" />

          <Field
            name={attributes["теги"]}
            component={FormSelect}
            placeholder="Добавьте тег..."
            mode="tags"
            className={b("field")}
          />

          <Field
            name={attributes["закрытьКомментирование"]}
            component={FormCheckbox}
            title="Закрыть комментирование"
            className={b("checkbox")}
          />

          <Label className={b("label")} text="Соавторы" tip="Удалить соавтора сможет только администрация" />

          <div className={b("inputs-grid")}>
            <Field
              name={attributes["рольСоавтора"]}
              component={FormSelect}
              size="small"
              options={rolesSelectOptions}
              placeholder="Выберите роль..."
              className={b("field")}
            />
            <AutoComplete
              size="small"
              className={b("field")}
              options={renderAuthorOptions(authorAutocompleteOptions)}
            />
          </div>
          <Button size="small" htmlType={"submit"} className={b("save-btn")}>
            Сохранить
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { data } = ownProps;
  const initialValues = getInitialValues(data);
  const { genres } = state.genres;
  const { id: book_id, cover_url } = state.books?.currentBook;

  return { initialValues, genres, book_id, cover_url };
};

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(getGenres()),
  removeBookCover: (book_id: number) => dispatch(removeBookCover(book_id)),
});

let connectedComponent: any = reduxForm({ form: FORM_NAME, enableReinitialize: true, validate })(DescriptionInputs);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as DescriptionInputs };
