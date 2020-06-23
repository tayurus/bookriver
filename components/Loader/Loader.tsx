import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { connect } from "react-redux";
import { IProps, defaultProps, IState } from "./interface";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-loader");

class Loader extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, userLoading, booksLoading, cycleLoading } = this.props;

    return (
      (userLoading || booksLoading || cycleLoading) && <div className={classNames(b(), className)}>Загрузка...</div>
    );
  }
}

const mapStateToProps = (state) => {
  const userLoading = state.user?.loading;
  const booksLoading = state.books?.loading;
  const cycleLoading = state.cycle?.loading;

  return {
    userLoading,
    booksLoading,
    cycleLoading,
  };
};

const connectedComponent = connect(mapStateToProps, null)(Loader);

export { connectedComponent as Loader };
