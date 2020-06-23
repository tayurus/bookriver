import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { SettingsInputs } from "~/componentsForPages/settings";
import { PrivateRoute } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("settings-page");

class SettingsPage extends React.Component {
  render() {
    return (
      <div className={classNames(b(), "site-content")}>
        <SettingsInputs />
      </div>
    );
  }
}

export default PrivateRoute(SettingsPage);
