import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState } from "./interface";
import { Comment, Avatar, Input, Button } from "antd";
import "./Comments.scss";
import { getComments, addComment } from "~/redux/comments";
import { connect } from "react-redux";
import { IComment, ICommentCreate } from "~/types";

const { TextArea } = Input;
const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-comments");

// @ts-ignore
const scrollToRef = (ref) => window.scrollTo(0, ref.current.getBoundingClientRect().top + window.scrollY - 50);

class Comments extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  private myRef: any;

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    commentText: "",
  };

  componentDidMount(): void {
    this.loadComments();
  }

  loadComments = () => {
    const { getComments, bookId } = this.props;
    getComments("book", bookId);
  };

  executeScroll = () => scrollToRef(this.myRef);

  sendComment = async (commentText: string) => {
    const { addComment, bookId } = this.props;
    await addComment({ content: commentText, target_class: "book", target_id: bookId });
    this.loadComments();
  };

  ctrlEnterHandler = (e) => {
    const { commentText } = this.state;
    if (e.keyCode === 13 && e.ctrlKey) {
      this.sendComment(commentText);
      this.setState({ commentText: "" });
    }
  };

  handleCommentTextChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  render() {
    const { className, comments } = this.props;
    const { commentText } = this.state;

    const formattedComments = comments.map((it: IComment) => ({
      id: it.id,
      actions: [
        <span key={`answer-to-${it.id}`} className={b("action")}>
          Ответить
        </span>,
        <span key={`report-to-${it.id}`} className={b("action", { gray: true })}>
          Пожаловаться
        </span>,
      ],
      author: (
        <div className={b("author-wrapper")}>
          <Avatar
            className={b("avatar")}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
          />
          <span className={b("author-name")}>Эдуард Галеев</span>
          <span className={b("time")}>12 мар 2020, 12:00</span>
        </div>
      ),
      content: <p className={b("text")}>{it.content}</p>,
    }));

    return (
      <div className={classNames(b(), className)} ref={this.myRef}>
        <div className={b("textarea-wrapper")}>
          <div className={b("textarea-avatar-wrapper")}>
            <Avatar
              className={b("avatar", { textarea: true })}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
            />
          </div>

          <TextArea
            onKeyDown={this.ctrlEnterHandler}
            placeholder="Написать комментарий"
            className={b("textarea")}
            autoSize={{ minRows: 1 }}
            value={commentText}
            onChange={this.handleCommentTextChange}
          />
        </div>

        <div className={b("comments")}>
          {formattedComments.map((item, index) => (
            <Comment key={`comment-${item.id}`} actions={item.actions} author={item.author} content={item.content} />
          ))}
        </div>

        <div className={b("bottom")}>
          <Button className={b("write-btn")} onClick={this.executeScroll}>
            Написать комментарий
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { comments } = state.comments;
  const { id: bookId } = state.books?.currentBook;
  return { comments, bookId };
};

const mapDispatchToProps = (dispatch) => ({
  getComments: (target_class: string, target_id: number) => dispatch(getComments(target_class, target_id)),
  addComment: (commentData: ICommentCreate) => dispatch(addComment(commentData)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Comments);

export { connectedComponent as Comments };
