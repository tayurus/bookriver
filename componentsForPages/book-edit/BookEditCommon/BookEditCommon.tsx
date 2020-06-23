import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { connect } from "react-redux";
import { Field, reduxForm, submit, formValueSelector, isValid } from "redux-form";
import Router from "next/router";
import { IProps, IState, defaultProps, getInitialValues } from "./interface";
import { ReactComponent as PencilIcon } from "~/static/BookEditCommon/pencil.svg";
import { ReactComponent as OkIcon } from "~/static/BookEditCommon/ok.svg";
import { Switch, Button } from "~/components";
import { renameBook, deleteBook, changePublishStatusBook, changeCompleteStatusBook, getBook } from "~/redux/books";
import { FormInput } from "~/helpers/antd-redux-form";
import { OptionsPopover } from "../index";
import { validate } from "./validate";
import { message } from "antd";
const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-edit-common");

class BookEditCommon extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  state = {
    isTitleEdit: false,
  };

  toggleTitleEdit = () => {
    const { renameBook, bookId, name, onSubmit, formValid } = this.props;

    // если до этого мы были в процессе редактирования
    if (this.state.isTitleEdit) {
      // отправляем запрос на изменение названия книги
      onSubmit();
      if (formValid) {
        renameBook(bookId, name);
        // выходим из режима редактирования
        this.setState({ isTitleEdit: false });
      }
    } else {
      this.setState({ isTitleEdit: true });
    }
  };

  handleBookDelete = () => {
    const { bookId, deleteBook } = this.props;
    deleteBook(bookId)
      .then(() => Router.push("/books"))
      .catch(() => {});
  };

  handlePublishStatusButtonClick = () => {
    const newStatus = {
      "not published": "published",
      published: "not published",
      deleted: "not published",
    };
    const { status_publish, changePublishStatusBook, bookId, getBook } = this.props;

    if (typeof newStatus[status_publish] !== "undefined") {
      changePublishStatusBook(bookId, newStatus[status_publish])
        .then(() => getBook(bookId))
        .catch(() => message.error("Не удалось поменять статус публикации книги"));
    } else {
      message.error("Не удается определить статус публикации книги!");
    }
  };

  renderPublishStatusButton = () => {
    const { status_publish } = this.props;
    const buttonLabels = {
      "not published": "Опубликовать",
      published: "Снять с публикации",
      deleted: "Восстановить книгу",
      undefined: "Книга недоступна",
    };

    return (
      <Button size="small" className={b("publish-btn")} onClick={this.handlePublishStatusButtonClick}>
        {buttonLabels[status_publish]}
      </Button>
    );
  };

  handleCompleteSwitchChange = (complete: boolean) => {
    const { changeCompleteStatusBook, bookId, getBook } = this.props;
    changeCompleteStatusBook(bookId, complete ? "complete" : "writing")
      .then(() => getBook(bookId))
      .catch(() => message.error("Не удалось поменять статус завершенности книги"));
  };

  renderCompleteSwitch = () => {
    const { status_complete } = this.props;

    return (status_complete as string) === "freeze" ? null : (
      <div className={b("status")}>
        <div className={b("status-label", { active: status_complete === "writing" })}>В процессе</div>
        <Switch
          className={b("switch")}
          checked={status_complete === "complete"}
          onChange={this.handleCompleteSwitchChange}
        />
        <div className={b("status-label", { active: status_complete === "complete" })}>Завершить</div>
      </div>
    );
  };

  handleFreezeUnfreezeBook = (status: string) => {
    const { changeCompleteStatusBook, bookId, getBook } = this.props;
    changeCompleteStatusBook(bookId, status)
      .then(() => getBook(bookId))
      .catch(() => message.error("Не удалось поменять статус завершенности книги"));
  };

  render() {
    const { isTitleEdit } = this.state;
    const {
      className,
      name,
      onSubmit,
      readersCount,
      alreadyReadCount,
      willReadCount,
      viewsCount,
      status_complete,
    } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <OptionsPopover
          onRemove={this.handleBookDelete}
          onHold={() => this.handleFreezeUnfreezeBook("freeze")}
          onUnhold={() => this.handleFreezeUnfreezeBook("writing")}
          className={b("options")}
          options={[status_complete === "freeze" ? "Разморозить" : "Заморозить", "Удалить"]}
        />

        <div className={b("wrapper")}>
          {isTitleEdit ? (
            <form onSubmit={onSubmit} className={b("title")}>
              <Field
                component={FormInput}
                name="name"
                className={b("title-input")}
                suffix={<OkIcon className={b("ok-icon")} onClick={this.toggleTitleEdit} />}
              />
            </form>
          ) : (
            <div className={b("title")} onClick={this.toggleTitleEdit}>
              {name} <PencilIcon className={b("edit-title-icon")} />
            </div>
          )}

          <div className={b("controls")}>
            {this.renderCompleteSwitch()}
            {this.renderPublishStatusButton()}
          </div>
        </div>

        <div className={b("info")}>
          <div className={b("info-wrapper")}>
            <span className={b("info-title")}>Читают</span>
            <span className={b("info-value")}>{readersCount}</span>
          </div>
          <div className={b("info-wrapper")}>
            <span className={b("info-title")}>Прочитали</span>
            <span className={b("info-value")}>{alreadyReadCount}</span>
          </div>
          <div className={b("info-wrapper")}>
            <span className={b("info-title")}>Будут читать</span>
            <span className={b("info-value")}>{willReadCount}</span>
          </div>
          <div className={b("info-wrapper")}>
            <span className={b("info-title")}>Просмотры</span>
            <span className={b("info-value")}>{viewsCount}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const initialValues = getInitialValues(ownProps);
  const formValues = formValueSelector("bookName");
  const name = formValues(state, "name");
  const formValid = isValid("bookName")(state);

  return { initialValues, name, formValid };
};

const mapDispatchToProps = (dispatch) => ({
  renameBook: (bookId: number, newName: string) => dispatch(renameBook(bookId, newName)),
  deleteBook: (bookId: number) => dispatch(deleteBook(bookId)),
  changePublishStatusBook: (bookId: number, newStatus: string) => dispatch(changePublishStatusBook(bookId, newStatus)),
  changeCompleteStatusBook: (bookId: number, newStatus: string) =>
    dispatch(changeCompleteStatusBook(bookId, newStatus)),
  getBook: (book_id: number) => dispatch(getBook(book_id)),
  onSubmit: () => dispatch(submit("bookName")),
});

let connectedComponent: any = reduxForm({ form: "bookName", enableReinitialize: true, validate })(BookEditCommon);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as BookEditCommon };
