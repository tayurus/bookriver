import React from "react";
import { connect } from "react-redux";
import { sendProviderConnectCode, me } from "~/redux/user";
import { withRouter } from "next/router";
import { pages } from "~/constants/pages";

class ProviderCallbackPage extends React.Component<any, any> {
  async componentDidMount() {
    const { sendProviderConnectCode, router, me } = this.props;
    const {
      query: { code, provider },
    } = router;
    router.push(pages.settings);
    setTimeout(async () => {
      await sendProviderConnectCode(provider, code);
      await me();
    }, 500);
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendProviderConnectCode: (provider: string, code: string) => dispatch(sendProviderConnectCode(provider, code)),
    me: () => dispatch(me()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProviderCallbackPage));
