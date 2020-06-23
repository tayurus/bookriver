import React from "react";
import { withNaming } from "@bem-react/classname";
import { Footer } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("reader-layout");

export class ReaderLayout extends React.Component<any, any> {
  render() {
    const { children } = this.props;

    return (
      <>
        <div className={b()} style={{ flexGrow: 1 }}>
          <div className={b("children")}>{children}</div>
        </div>
        <Footer />
      </>
    );
  }
}
