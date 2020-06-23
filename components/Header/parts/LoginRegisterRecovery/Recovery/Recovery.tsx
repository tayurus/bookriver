import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Field, reduxForm, InjectedFormProps, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { IProps, defaultProps, IState, IForm } from "./interface";
import { FormInput } from "~/helpers/antd-redux-form";
import { attributes } from "~/constants/attributes";
import { validate } from "./validate";
import { forgot } from "~/redux/user";
import { Dispatch } from "redux";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-login");

class Recovery extends React.Component<IProps & InjectedFormProps<IForm, IProps>, IState> {
  render() {
    const { className, message, handleSubmit } = this.props;

    return (
      <form className={classNames(b(), className)} onSubmit={handleSubmit}>
        <h2 className={b("title")}>Восстановление пароля</h2>

        <div className={b("error")}>{message}</div>

        {/* этот див нужен, чтобы работал last-child в css */}
        <div>
          <Field name={"email"} component={FormInput} placeholder="Email" className={b("field")} />
        </div>

        <button className={b("btn", { recovery: true })}>Восстановить</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const message = state.user?.message;
  const recoveryValues = formValueSelector("recovery");
  const email = recoveryValues(state, attributes["электроннаяПочта"]);
  return { email, message };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => values,
  forgot: (email: string) => dispatch(forgot(email)),
  onSubmitSuccess(result: any, dispatch: Dispatch<any>, props: IProps & InjectedFormProps<FormData, IProps>): void {
    const { email } = result;
    const { forgot } = props;
    forgot(email);
  },
});

let connectedComponent: any = reduxForm({ form: "recovery", enableReinitialize: true, validate })(Recovery);
connectedComponent = connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as Recovery };
