import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import qs from "query-string";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { reset as resetPassword } from "~/redux/user";
import { attributes } from "~/constants/attributes";
import { FormInput } from "~/helpers/antd-redux-form";
import { Button } from "~/components";

class ResetPasswordPage extends React.Component<any, any> {
  handleResetPasswordClick = () => {
    const { resetPassword, router, password } = this.props;
    const queryParams = qs.parseUrl(router.asPath);
    const {
      query: { token },
    } = queryParams;
    resetPassword(password, token);
  };

  render() {
    return (
      <div className="site-content">
        <h1>Страница задания нового пароля</h1>
        <Field component={FormInput} placeholder="Введите новый пароль" type="password" name={attributes["пароль"]} />
        <br />
        <Button onClick={this.handleResetPasswordClick}>Сменить пароль</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const resetValues = formValueSelector("reset");
  const password = resetValues(state, attributes["пароль"]);
  return { password };
};

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (password: string, resetToken: string) => dispatch(resetPassword(password, resetToken)),
});

export const validate = (values, props) => {
  // ошибки для валидации
  const errors: Record<string, string> = {};

  if (!values[attributes["пароль"]]) {
    errors[attributes["пароль"]] = "Пароль не может быть пустым!";
  }

  return errors;
};

const connectedComponent: any = reduxForm({ form: "reset", enableReinitialize: true, validate })(ResetPasswordPage);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(connectedComponent));
