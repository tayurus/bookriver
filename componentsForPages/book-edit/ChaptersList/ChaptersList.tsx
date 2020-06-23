import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState } from "./interface";
import { ChapterInfo } from "../index";
import { Button } from "~/components";
import { Tree } from "antd";
import { IChapter } from "~/types";
import Router from "next/router";
import { connect } from "react-redux";
import { changeChapterIndex, getChaptersByBookID, deleteChapter } from "~/redux/chapter";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("chapter-list");
const { TreeNode } = Tree;

const getPublishedChaptersCount = (chapters) =>
  chapters.reduce((acc, it) => (it["status"] === "опубликована" ? acc + 1 : acc), 0);

class ChaptersList extends React.Component<IProps, IState> {
  renderChapters = () => {
    const { chapters, deleteChapter, getChaptersByBookID, bookId } = this.props;
    return (
      <>
        {chapters.map((it: IChapter, index) => {
          return (
            <TreeNode
              title={
                <ChapterInfo
                  {...it}
                  onDelete={() => deleteChapter(it.id).then(() => getChaptersByBookID(bookId))}
                  className={b("item")}
                  key={`chapter-info-${index}`}
                />
              }
              key={it.id}
            />
          );
        })}
      </>
    );
  };

  onDrop = async (info) => {
    const {
      dropPosition,
      dragNode: { key },
    } = info;
    const { changeChapterIndex, bookId, getChaptersByBookID } = this.props;
    await changeChapterIndex(key, dropPosition);
    getChaptersByBookID(bookId);
  };

  render() {
    const { chapters, className, bookId } = this.props;
    return (
      <div className={classNames(b(), className)}>
        <div className={b("controls")}>
          <Button size="small" className={b("btn")}>
            Загрузить
          </Button>
          <Button
            size="small"
            className={b("btn")}
            onClick={() => Router.push("/book-edit/[bookId]/chapter/[chapterId]", `/book-edit/${bookId}/chapter/new`)}
          >
            Добавить главу
          </Button>
          <span className={b("tip")}>Можно загружать форматы: fb2, docx</span>
        </div>

        <div className={b("info")}>
          <span className={b("label")}>Главы: {chapters.length} из 100</span>
          <span className={b("label")}>Опубликовано: {getPublishedChaptersCount(chapters)}</span>
        </div>

        <Tree className={b("items")} blockNode draggable onDrop={this.onDrop} showIcon>
          {this.renderChapters()}
        </Tree>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentBook = state.books?.currentBook;
  const bookId = currentBook?.id;
  return { bookId };
};

const mapDispatchToProps = (dispatch) => ({
  changeChapterIndex: (chapter_id: number, newIndex: number) => dispatch(changeChapterIndex(chapter_id, newIndex)),
  getChaptersByBookID: (book_id: number) => dispatch(getChaptersByBookID(book_id)),
  deleteChapter: (chapter_id: number) => dispatch(deleteChapter(chapter_id)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ChaptersList);
connectedComponent.defaultProps = defaultProps;

export { connectedComponent as ChaptersList };
