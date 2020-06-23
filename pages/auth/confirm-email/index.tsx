import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import qs from "query-string";
import { confirm } from "~/redux/user";

class ConfirmEmailPage extends React.Component<any, any> {
  componentDidMount(): void {
    const { confirm, router } = this.props;

    const queryParams = qs.parseUrl(router.asPath);
    const {
      query: { token },
    } = queryParams;
    confirm(token).then(() => {
      router.push("/");
    });
  }

  render() {
    return <h1>Страница подтверждения регистрации</h1>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  confirm: (confirmToken: string) => dispatch(confirm(confirmToken)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailPage));
