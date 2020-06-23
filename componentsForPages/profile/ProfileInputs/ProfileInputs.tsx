import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { Divider } from "antd";
import { connect } from "react-redux";
import { attributes } from "~/constants/attributes";
import { FormInput, FormRadioGroup, FormRadio, FormDatePicker } from "~/helpers/antd-redux-form";
import { Button, Label, FileUpload } from "~/components";
import { validate } from "./validate";
import { getInitialValues, defaultProps } from "./interface";
import { baseURL, endpoints } from "~/constants/api";
import { submit } from "./submit";
import { me, deleteAvatar } from "~/redux/user";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("profile-inputs");
const FORM_NAME = "profile";

class ProfileInputs extends React.Component<any, any> {
  render() {
    const { className, username, handleSubmit, photo_url, me, deleteAvatar } = this.props;

    return (
      <form onSubmit={handleSubmit(submit)} className={classNames(b(), className)}>
        <FileUpload
          type="avatar"
          url={photo_url}
          action={`${baseURL}${endpoints.user.uploadAvatar}`}
          name="image"
          afterUpload={me}
          onRemove={() => deleteAvatar().then(me)}
          className={b("avatar-upload")}
        />
        <Field
          name={"name"}
          component={FormInput}
          title="Имя и фамилия или псевдоним*"
          tip="Внимание! Имя и фамилию можно изменить 1 раз"
          className={b("field")}
        />

        <Field
          name="status"
          component={FormInput}
          type="textarea"
          title="Статус"
          maxSymbolsCount={150}
          className={b("field")}
        />

        <Field name="username" component={FormInput} title="Адрес моей страницы*" className={b("field")} />
        <Label tip={`https://bookriver.ru/user/${username}`} />

        <Divider className={b("divider")} />

        <div className={b("row")}>
          <Field
            name={"birthday"}
            component={FormDatePicker}
            title="Дата рождения*"
            className={b("field", { "date-picker": true })}
          />

          <Field title="Пол*" name={"gender"} component={FormRadioGroup} className={b("radio-group")}>
            <Field
              className={b("radio", { male: true })}
              type="radio"
              value={"male"}
              title="Мужской"
              component={FormRadio}
              name={"gender"}
            />
            <Field
              className={b("radio")}
              type="radio"
              value={"female"}
              title="Женский"
              component={FormRadio}
              name={"gender"}
            />
          </Field>
        </div>

        <Label tip="Другие пользователи не увидят дату рождения и пол. Укажете эту информацию и мы сделаем рекомендации более персональными для вас." />

        <Divider className={b("divider")} />

        <Field
          name="about_me"
          component={FormInput}
          type="textarea"
          title="О себе"
          tip="до 1000 символов"
          className={b("field")}
        />

        <Button type="primary" size="large" htmlType={"submit"} className={b("save-btn")}>
          Сохранить
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const formValuesSelector = formValueSelector(FORM_NAME);
  const username = formValuesSelector(state, attributes["юзернейм"]);

  const photo_url = state.user?.user?.photo_url;

  const { data } = ownProps;
  const initialValues = getInitialValues(data);

  return {
    initialValues,
    username,
    photo_url,
  };
};

const mapDispatchToProps = (dispatch) => ({
  me: () => dispatch(me()),
  deleteAvatar: () => dispatch(deleteAvatar()),
});

let connectedComponent: any = reduxForm({ form: FORM_NAME, enableReinitialize: true, validate })(ProfileInputs);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;
export { connectedComponent as ProfileInputs };
