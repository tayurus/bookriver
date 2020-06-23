import React from "react";
import { withNaming } from "@bem-react/classname";
import { BookReader, PrivateRoute } from "~/components";
import { getBook } from "~/redux/books";
import { getChaptersByBookID } from "~/redux/chapter";
import { connect } from "react-redux";
import { withRouter } from "next/router";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("reader-page");

const mocks = {
  chaptersList: [
    { title: "Глава 1. Разгребая проблемы, которые и не думают заканчиваться" },
    { title: "Глава 2. Открытия и разочарования" },
    { title: "Глава 3. Разгребая проблемы, которые и не думают заканчиваться" },
    { title: "Глава 4. Мертвая волшебница" },
    { title: "Глава 5. Открытия и разочарования" },
    { title: "Глава 6. Легион" },
  ],
  currentChapterIndex: 0,
  bookInfo: {
    title: "Проспавший смерть, опоздавший к рождению",
    author: { name: "Константин Константинов" },
    coauthors: [{ name: "Иван Иванов" }, { name: "Петр Петров" }],
  },
};

class ReaderPage extends React.Component<any, any> {
  componentDidMount(): void {
    const { getBook, getChaptersByBookID } = this.props;
    const {
      router: {
        query: { bookId },
      },
    } = this.props;
    getBook(bookId);
    getChaptersByBookID(bookId);
  }

  render() {
    const { bookChapters, currentBook, bookLoading, chaptersLoading } = this.props;
    console.log("props = ", this.props);
    if (bookLoading || chaptersLoading) {
      return <div>Загрука...</div>;
    }
    return <div className={b()}>{<BookReader chaptersList={bookChapters} bookInfo={currentBook} />}</div>;
  }
}

const mapStateToProps = (state) => {
  const { currentBook, loading: bookLoading } = state.books;
  const { bookChapters, chaptersLoading } = state.chapter;
  return { currentBook, bookLoading, bookChapters, chaptersLoading };
};

const mapDispatchToProps = (dispatch) => ({
  getBook: (book_id: number) => dispatch(getBook(book_id)),
  getChaptersByBookID: (book_id: number) => dispatch(getChaptersByBookID(book_id)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ReaderPage);

export default withRouter(PrivateRoute(connectedComponent));
