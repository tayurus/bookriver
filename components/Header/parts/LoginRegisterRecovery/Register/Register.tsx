import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Field, reduxForm, InjectedFormProps, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { IProps, defaultProps, IState, IForm } from "./interface";
import { ReactComponent as FacebookIcon } from "~/static/LoginAndRegister/fb.svg";
import { ReactComponent as GoogleIcon } from "~/static/LoginAndRegister/gm.svg";
import { ReactComponent as VkIcon } from "~/static/LoginAndRegister/vk.svg";
import { ReactComponent as YandexIcon } from "~/static/LoginAndRegister/ya.svg";
import { FormInput } from "~/helpers/antd-redux-form";
import { attributes } from "~/constants/attributes";
import { Button } from "~/components";
import { validate } from "./validate";
import { register } from "~/redux/user";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-login");

class Register extends React.Component<IProps & InjectedFormProps<IForm, IProps>, IState> {
  handleRegisterClick = () => {
    const { register, email, name, password } = this.props;
    register(email, name, password);
  };

  render() {
    const { className, onEnterClick, message } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <h2 className={b("title")}>Регистрация</h2>
        <div className={b("row", { social: true })}>
          <VkIcon className={b("social-icon")} />
          <FacebookIcon className={b("social-icon")} />
          <GoogleIcon className={b("social-icon")} />
          <YandexIcon className={b("social-icon")} />
        </div>

        <div className={b("label", { lines: true, or: true })}>или</div>

        <div className={b("error")}>{message}</div>

        {/* этот див нужен, чтобы работал last-child в css */}
        <div>
          <Field
            name={attributes["электроннаяПочта"]}
            component={FormInput}
            placeholder="Email"
            className={b("field")}
          />
          <Field
            name={attributes["пароль"]}
            component={FormInput}
            type="password"
            placeholder="Пароль"
            visibilityToggle
            className={b("field")}
          />
          <Field name={attributes["имя"]} placeholder="Имя" component={FormInput} className={b("field")} />
        </div>

        <div className={b("text", { agreement: true })}>
          Нажимая кнопку, я принимаю условия
          {' '}
          <a>Лицензионного договора</a>
        </div>

        <Button className={b("btn")} block onClick={this.handleRegisterClick}>
          Зарегистрироваться
        </Button>

        <div className={b("label", { "no-account": true })}>У вас нет аккаунта?</div>
        <a className={b("link")} onClick={onEnterClick}>
          Войти
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const message = state.user?.message;
  const registerValues = formValueSelector("register");
  const email = registerValues(state, attributes["электроннаяПочта"]);
  const name = registerValues(state, attributes["имя"]);
  const password = registerValues(state, attributes["пароль"]);

  return {
    email,
    name,
    password,
    message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  register: (email: string, name: string, password: string) => dispatch(register(email, name, password)),
});

let connectedComponent: any = reduxForm({ form: "register", enableReinitialize: true, validate })(Register);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as Register };
