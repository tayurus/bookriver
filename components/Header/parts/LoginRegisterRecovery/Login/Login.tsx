import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState, IForm } from "./interface";
import { ReactComponent as FacebookIcon } from "~/static/LoginAndRegister/fb.svg";
import { ReactComponent as GoogleIcon } from "~/static/LoginAndRegister/gm.svg";
import { ReactComponent as VkIcon } from "~/static/LoginAndRegister/vk.svg";
import { ReactComponent as YandexIcon } from "~/static/LoginAndRegister/ya.svg";
import { FormInput, FormCheckbox } from "~/helpers/antd-redux-form";
import { attributes } from "~/constants/attributes";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
import { validate } from "./validate";
import { getToken, me, getProviderLoginURL } from "~/redux/user";
import { Dispatch } from "redux";
import { Button } from "~/components";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-login");

class Login extends React.Component<IProps & InjectedFormProps<IForm, IProps>, IState> {
  handleSocialNetworkIconClick = async (provider: string) => {
    const { getProviderLoginURL } = this.props;
    const url = await getProviderLoginURL(provider);
    window.location.href = url;
  };

  render() {
    const { className, onRegisterClick, onRecoveryClick, message, handleSubmit } = this.props;

    return (
      <form className={classNames(b(), className)} onSubmit={handleSubmit}>
        <h2 className={b("title")}>Вход</h2>
        <div className={b("row", { social: true })}>
          <VkIcon className={b("social-icon")} onClick={() => this.handleSocialNetworkIconClick("vkontakte")} />
          <FacebookIcon className={b("social-icon")} onClick={() => this.handleSocialNetworkIconClick("facebook")} />
          <GoogleIcon className={b("social-icon")} onClick={() => this.handleSocialNetworkIconClick("google")} />
          <YandexIcon className={b("social-icon")} onClick={() => this.handleSocialNetworkIconClick("yandex")} />
        </div>

        <div className={b("label", { lines: true, or: true })}>или</div>

        <div className={b("error")}>{message}</div>

        {/*этот див нужен, чтобы работал last-child в css*/}
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
            visibilityToggle={true}
            className={b("field")}
          />
        </div>

        <div className={b("row", { "bottom-login": true })}>
          <Field name={attributes["запомнитьМеня"]} component={FormCheckbox} title="Запомнить меня" />
          <a className={b("link")} onClick={onRecoveryClick}>
            Забыли пароль?
          </a>
        </div>

        <Button htmlType={"submit"} className={b("btn")} block>
          Войти
        </Button>

        <div className={b("label", { "no-account": true })}>У вас нет аккаунта?</div>
        <a className={b("link")} onClick={onRegisterClick}>
          Зарегистрироваться
        </a>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const message = state.user?.message;
  return { message };
};

const mapDispatchToProps = (dispatch: Function, ownProps: any) => {
  return {
    getToken: (email: string, password: string, rememberMe: number) => dispatch(getToken(email, password, rememberMe)),
    me: () => dispatch(me()),
    getProviderLoginURL: (provider: string) => dispatch(getProviderLoginURL(provider)),
    onSubmit: (values) => values,
    onSubmitSuccess(result: any, dispatch: Dispatch<any>, props: IProps & InjectedFormProps<FormData, IProps>): void {
      const { email, password, rememberMe } = result;
      const { getToken, me } = props;
      getToken(email, password, rememberMe).then(
        () => me(),
        () => {}
      );
    },
  };
};

let connectedComponent: any = reduxForm({ form: "login", enableReinitialize: true, validate })(Login);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as Login };
