import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { connect } from "react-redux";
import { ProfileInputs } from "~/componentsForPages/profile";
import { PrivateRoute } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("profile-page");

class ProfilePage extends React.Component<any> {
  render() {
    const { user } = this.props;
    // TODO: убрать этот if - это костыль, потому что redux-form не хочет работать нормально при первом рендеринге на стороне сервера
    if (user?.id) {
      return (
        <div className={classNames(b(), "site-content")}>
          <ProfileInputs data={user} />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  const { user } = state.user;
  return { user };
};

const connectedComponent = connect(mapStateToProps, null)(ProfilePage);

export default PrivateRoute(connectedComponent);
