import React from "react";
import { withRouter } from "next/router";
import { withNaming } from "@bem-react/classname";
import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import classNames from "classnames/dedupe";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { defaultProps } from "~/componentsForPages/book-edit/ChaptersList/interface";
import { Input, Label, Button, PrivateRoute } from "~/components";
import { createChapter, editChapter, getChaptersByBookID } from "~/redux/chapter";
import { IChapterUpdate } from "~/types";
import { message } from "antd";

let Editor;

if (typeof window !== "undefined") {
  Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor));
}

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-edit-page-chapter-edit");

class ChapterPage extends React.Component<any, any> {
  state = {
    editor: EditorState.createEmpty(),
    chapterName: "",
  };

  async componentDidMount() {
    const { getChaptersByBookID, bookId, chapterId } = this.props;
    // если это режим создания новой главы, то нам нечего тут делать
    if (chapterId === "new") {
      return;
    }

    /* если же в адресной стркое у нас есть chapterId
    // запросим информацию обо всех главах книги (апишка пока не позволяет по-другому получить
    информацию о главе)
     */
    const chapters = await getChaptersByBookID(bookId);
    // найдем нужную главу, зная chapterId
    const currentChapter = chapters.filter((it) => +it["id"] === +chapterId)[0];
    // через страшную магию подставим из поля content начальное состояние текстового редактора
    const blocksFromHTML = convertFromHTML(currentChapter["content"]);
    const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
    this.setState({ editor: EditorState.createWithContent(state), chapterName: currentChapter["name"] });
  }

  /* Когда меняется текст в редакторе текста, меняем как состояние самого редактора, так и извлекаем из него контент в виде HTML */
  onEditorStateChange = (editor) => {
    this.setState({ editor });
  };

  handleSaveClick = async () => {
    const { createChapter, editChapter, chapterId, bookId, router } = this.props;
    const { chapterName, editor } = this.state;
    const editorHTML = draftToHtml(convertToRaw(editor.getCurrentContent()));

    // валидация, которую нужно будет переделать
    if (editorHTML === "") {
      message.error("Текст главы не может быть пустым!");
    } else if (chapterName === "") {
      message.error("Название главы не может быть пустым!");
    } else {
      // тут логика с адресной сторокой или с пропсами - если id главы уже есть, , иначе - создаем
      if (chapterId === "new") {
        // создание главы
        try {
          const newChapterId = await createChapter({
            book_id: bookId,
            name: chapterName,
            free: true, // это поле пока что никак не используется, передается просто потому что в свагере описано
            content: editorHTML,
          });
          // после успешного создания главы сервер вернет нам ее ID и мы меняем адресную строку,
          // чтобы войти в реим редактирования главы
          router.replace("/book-edit/[bookId]/chapter/[chapterId]", `/book-edit/${bookId}/chapter/${newChapterId}`);
        } catch (err) {}
      } else {
        // редактирование главы - просто передаем информацию из state в экшен
        editChapter(chapterId, { name: chapterName, free: true, content: editorHTML });
      }
    }
  };

  handleChapterNameChange = (e) => {
    this.setState({ chapterName: e.target.value });
  };

  render() {
    /* этот if борется c тем, что компонент Editor что-то делает с document, которого нет при SSR, поэтому
    я делаю проверку, а в браузере ли мы? */
    if (typeof window === "undefined") {
      return <div>loading...</div>;
    }
    const { editor, chapterName } = this.state;
    return (
      <div className={classNames(b(), "site-content")}>
        <h2 className={b("title")}>Добавить главу</h2>
        <Input
          value={chapterName}
          onChange={this.handleChapterNameChange}
          title="Название главы*"
          className={b("chapter-title-input")}
        />
        <Label text="Добавить текст" tip="Мин. кол-во знаков: 3 000" className={b("editor-label")} />
        <Editor
          editorState={editor}
          wrapperClassName="demo-wrapper"
          editorClassName={b("editor")}
          onEditorStateChange={this.onEditorStateChange}
        />

        <div className={b("buttons")}>
          <Button size="small" className={b("cancel-btn")}>
            Отменить
          </Button>
          <Button size="small" onClick={this.handleSaveClick}>
            Сохранить
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    router: {
      query: { bookId, chapterId },
    },
  } = ownProps;

  return { bookId, chapterId };
};

const mapDispatchToProps = (dispatch) => ({
  getChaptersByBookID: (book_id: number) => dispatch(getChaptersByBookID(book_id)),
  createChapter: ({ book_id, name, free, content }) =>
    dispatch(
      createChapter({
        book_id,
        name,
        free,
        content,
      })
    ),
  editChapter: (chapter_id: number, newChapterData: IChapterUpdate) =>
    dispatch(editChapter(chapter_id, newChapterData)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ChapterPage);
connectedComponent.defaultProps = defaultProps;

export default PrivateRoute(withRouter(connectedComponent));
