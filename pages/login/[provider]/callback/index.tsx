import React from "react";
import { connect } from "react-redux";
import { sendProviderLoginCode, me } from "~/redux/user";
import { withRouter } from "next/router";

class ProviderCallbackPage extends React.Component<any, any> {
  async componentDidMount() {
    const { sendProviderLoginCode, router, me } = this.props;
    const {
      query: { code, provider }
    } = router;
    router.push("/");
    setTimeout(async () => {
      await sendProviderLoginCode(provider, code);
      await me();
    }, 500);
  }

  render() {
    return <h1>Вы успешно вошли через социальную сеть!</h1>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendProviderLoginCode: (provider: string, code: string) => dispatch(sendProviderLoginCode(provider, code)),
    me: () => dispatch(me())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProviderCallbackPage));
