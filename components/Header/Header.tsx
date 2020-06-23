import React from "react";
import { withNaming } from "@bem-react/classname";
import Link from "next/link";
import { connect } from "react-redux";
import Router, { withRouter } from "next/router";
import { IProps, defaultProps, IState } from "./interface";
import {
  renderUserInfo,
  renderSearch,
  Basket,
  Notifications,
  Messages,
  renderLibrary,
  renderMyBooks,
  Hamburger,
  HeaderMobNav,
} from "./parts";
import { logout } from "~/redux/user";
import qs from "query-string";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-header");

class Header extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  componentDidMount(): void {
    this.handleEnterModalVisible({});
    Router.events.on("routeChangeComplete", () => this.setState({}));
  }

  componentWillUnmount(): void {
    Router.events.off("routeChangeComplete", () => this.setState({}));
  }

  handleEnterModalVisible = (prevState) => {
    const { router } = this.props;
    const { enterModalVisible } = this.state;
    const { query, pathname, asPath } = router;

    const queryParams = qs.parseUrl(asPath);

    if (prevState["enterModalVisible"] && !enterModalVisible) {
      delete queryParams.query["login"];
      const newAsPath = qs.stringifyUrl(queryParams);
      Router.push(pathname, newAsPath, { shallow: true });
      this.setState({ enterModalVisible: false });
    } else if (!prevState["enterModalVisible"] && enterModalVisible && !queryParams.query["login"]) {
      Router.push(pathname, `${asPath}?login=true`);
    } else if (query["login"] === "true" && !enterModalVisible) {
      this.setState({ enterModalVisible: true });
    } else if (!queryParams.query["login"] && enterModalVisible) {
      this.setState({ enterModalVisible: false });
    }
  };

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    this.handleEnterModalVisible(prevState);

    if (typeof prevProps.user.id === "undefined" && typeof this.props.user.id !== "undefined") {
      this.setState({ enterModalVisible: false });
    }
  }

  state = {
    enterModalVisible: false,
    registerModalVisible: false,
    recoveryModalVisible: false,
    searchPopoverVisible: false,
    hamburgerIsActive: false,
  };

  toggleModalVisible = (modalName: string) => {
    this.setState({
      enterModalVisible: false,
      registerModalVisible: false,
      recoveryModalVisible: false,
      [`${modalName}ModalVisible`]: !this.state[`${modalName}ModalVisible`],
    });
  };

  handleTurnToggle = () => {
    document.body.style.overflow = !this.state.hamburgerIsActive ? "hidden" : "";
    this.setState({
      hamburgerIsActive: !this.state.hamburgerIsActive,
    });
  };

  handleHeaderExitClick = () => {
    document.body.style.overflow = "";
    this.setState({
      hamburgerIsActive: false,
    });
  };

  toggleSearchPopover = (visible: boolean) => this.setState({ searchPopoverVisible: visible });

  render() {
    const { props } = this;
    const { user } = props;

    const loggedIn = typeof user?.id !== "undefined";
    return (
      <header className={b()}>
        <div className={b("inner")}>
          <div className={b("logo-wrap")}>
            <div className={b("hamburger-wrap")}>
              <Hamburger hamburgerIsActive={this.state.hamburgerIsActive} onClick={this.handleTurnToggle} />
            </div>
            <Link href="/">
              <a className={b("logo")}>Bookriver</a>
            </Link>
          </div>

          <div className={b("header-items-wrapper", { left: true })}>
            {renderSearch(props, b, this)}
            {renderLibrary(props, b)}
            <Link href="/">
              <a className={b("label", { "header-item": true, black2: true })}>Блоги</a>
            </Link>
          </div>

          <div className={b("header-items-wrapper", { right: true })}>
            {renderMyBooks(props, b)}

            <Link href="/">
              <a className={b("label", { "header-item": true, black2: true })}>Я автор</a>
            </Link>
          </div>

          <div className={b("profile-wrap")}>
            <div className={b("icons-wrapper")}>
              {loggedIn && <Messages {...props} b={b} />}
              <Notifications {...props} b={b} />
              <Basket {...props} b={b} />
            </div>

            {renderUserInfo(props, b, this, loggedIn)}
          </div>
        </div>
        <HeaderMobNav onExitClick={this.handleHeaderExitClick} mobNavIsActive={this.state.hamburgerIsActive} />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state?.user;

  return { user };
};

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch(logout()),
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);
connectedComponent = withRouter(connectedComponent);
export { connectedComponent as Header };
