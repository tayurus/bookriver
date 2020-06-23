import React from "react";
import { withNaming } from "@bem-react/classname";
import cookies from "next-cookies";
import { connect } from "react-redux";
import { AuthorCard, AuthorCycle } from "~/componentsForPages/author";
import { ICycle } from "~/types";
import { getCyclesByAuthorId } from "~/redux/cycle";
import { get } from "~/redux/user";
import { wrapper } from "~/redux/store";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("author-page");

class AuthorPage extends React.Component<any, any> {
  render() {
    const { cycles = [], message, currentUser = {} } = this.props;
    return (
      <div className={b()}>
        <AuthorCard userInfo={currentUser} className={b("card")} />
        <div className={b("author-books")}>
          <h2 className={b("author-title")}>Произведения автора</h2>
          {message}
          {cycles.map((it: ICycle, index) => (
            <AuthorCycle cycle={it} key={`author-page-cycle-${index}`} />
          ))}
        </div>
      </div>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query, ...rest }) => {
  const authorUsername = query.authorUsername;
  //@ts-ignore
  const userInfo = await store.dispatch(get(authorUsername));
  await store.dispatch(getCyclesByAuthorId(userInfo["id"]));
});

const mapStateToProps = (state) => {
  const { cycles, message } = state.cycle;
  const { currentUser } = state.user;
  return { cycles, message, currentUser };
};

const connectedComponent = connect(mapStateToProps, null)(AuthorPage);

export default connectedComponent;
