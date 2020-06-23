import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Tabs } from "antd";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import {
  BookEditCommon,
  ChaptersList,
  DescriptionInputs,
  CostInputs,
  Stats,
  Log,
} from "~/componentsForPages/book-edit";
import { PrivateRoute } from "~/components";
import { getBook, getBookProperties, getBookLog } from "~/redux/books";
import { getChaptersByBookID } from "~/redux/chapter";

const { TabPane } = Tabs;
const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-edit-page");

class BookEditPage extends React.Component<any, any> {
  componentDidMount(): void {
    const {
      getBook,
      getChaptersByBookID,
      getBookProperties,
      getBookLog,
      router: {
        query: { bookId },
      },
    } = this.props;
    getBook(bookId);
    getChaptersByBookID(bookId);
    getBookProperties(bookId);
    getBookLog(bookId);
  }

  render() {
    const { currentBook, bookChapters, currentBookProperties } = this.props;
    const { status_publish, status_complete, name, id } = currentBook;

    return (
      <div className={b()}>
        <BookEditCommon
          name={name}
          bookId={id}
          status_publish={status_publish}
          status_complete={status_complete}
          className={b("common")}
        />
        <Tabs defaultActiveKey="1" type="card" className={b("tabs")}>
          <TabPane tab="Содержание" key="1" className={classNames(b("tab-content"), "site-content")}>
            <ChaptersList chapters={bookChapters} />
          </TabPane>
          <TabPane tab="Иллюстрации" key="2" className={classNames(b("tab-content"), "site-content")}>
            Tab 2
          </TabPane>
          <TabPane tab="Описание" key="3" className={classNames(b("tab-content"), "site-content")}>
            <DescriptionInputs data={currentBookProperties} />
          </TabPane>
          <TabPane tab="Стоимость" key="4" className={classNames(b("tab-content"), "site-content")}>
            <CostInputs data={currentBook} />
          </TabPane>
          <TabPane tab="Статистика" key="5" className={classNames(b("tab-content"), "site-content")}>
            <Stats />
          </TabPane>
          <TabPane tab="Лог" key="6" className={classNames(b("tab-content"), "site-content")}>
            <Log />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentBook = state?.books?.currentBook || {};
  const currentBookProperties = state?.books?.currentBookProperties || {};
  const { bookChapters } = state?.chapter;
  return { currentBook, bookChapters, currentBookProperties };
};

const mapDispatchToProps = (dispatch) => ({
  getBook: (book_id: number) => dispatch(getBook(book_id)),
  getChaptersByBookID: (book_id: number) => dispatch(getChaptersByBookID(book_id)),
  getBookProperties: (book_id: number) => dispatch(getBookProperties(book_id)),
  getBookLog: (book_id: number) => dispatch(getBookLog(book_id)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(BookEditPage);

export default withRouter(PrivateRoute(connectedComponent));
