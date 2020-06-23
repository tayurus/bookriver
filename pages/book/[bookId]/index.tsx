import React from "react";
import { withNaming } from "@bem-react/classname";
import { getBook, getBookProperties } from "~/redux/books";
import { connect } from "react-redux";
import { wrapper } from "~/redux/store";
import { BuyBook, BookFeedbackTabs } from "~/componentsForPages/book";
import "./book.scss";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("book-page");

class BookPage extends React.Component<any, any> {
  render() {
    const { currentBook, currentBookProperties } = this.props;
    return (
      <div className={b()}>
        <BuyBook {...currentBook} {...currentBookProperties} />
        <BookFeedbackTabs className={b("feedback-tabs")} />
      </div>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, ...rest }) => {
  const {
    query: { bookId },
  } = rest;

  await store.dispatch(getBook(+bookId));
  await store.dispatch(getBookProperties(+bookId));
});

const mapStateToProps = (state) => {
  const currentBook = state.books?.currentBook;
  const currentBookProperties = state.books?.currentBookProperties;
  return { currentBook, currentBookProperties };
};

const connectedComponent = connect(mapStateToProps, null)(BookPage);

export default connectedComponent;
