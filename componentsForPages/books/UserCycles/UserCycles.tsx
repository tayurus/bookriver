import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Modal, Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { IProps, defaultProps, IState } from "./interface";
import { Button, Input, BookInfo } from "~/components";
import { BooksCycle } from "~/componentsForPages/books";
import emptyIcon from "~/static/UserBooks/empty.svg";
import { ReactComponent as CloseIcon } from "~/static/UserBooks/close.svg";
import { ICycle, IBook } from "~/types";

const { TreeNode } = Tree;
const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("user-cycles");

class UserCycles extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  state = {
    addBookModalVisible: false,
    addCycleModalVisible: false,
    cycles: [],
    cycleName: "",
    bookName: "",
    cycleIdForBookCreation: undefined,
  };

  // componentDidMount(): void {
  //   this.setState({ cycles: this.props.cycles });
  // }

  handleInputValueChange = (fieldName: string, value: any) => {
    this.setState({ ...this.state, [fieldName]: value });
  };

  toggleModalVisible = (modalName: string) => {
    this.setState({
      addBookModalVisible: false,
      addCycleModalVisible: false,
      [`${modalName}ModalVisible`]: !this.state[`${modalName}ModalVisible`],
    });
  };

  renderAddBookModal = () => {
    const { addBookModalVisible, bookName, cycleIdForBookCreation } = this.state;
    const { onBookCreate } = this.props;
    return (
      <Modal
        className={b("modal")}
        visible={addBookModalVisible}
        onCancel={() => this.toggleModalVisible("addBook")}
        title="Добавить произведение"
        footer={null}
        closeIcon={<CloseIcon />}
      >
        <Input
          title="Название произведения"
          className={b("add-input")}
          onChange={(e) => this.handleInputValueChange("bookName", e.target.value)}
        />
        <Button
          block
          onClick={() => {
            onBookCreate(bookName, cycleIdForBookCreation);
            this.toggleModalVisible("addBook");
          }}
        >
          Добавить
        </Button>
      </Modal>
    );
  };

  renderAddCycleModal = () => {
    const { addCycleModalVisible, cycleName } = this.state;
    const { onCycleCreate } = this.props;
    return (
      <Modal
        className={b("modal")}
        visible={addCycleModalVisible}
        onCancel={() => this.toggleModalVisible("addCycle")}
        title="Добавить цикл"
        footer={null}
        closeIcon={<CloseIcon />}
      >
        <Input
          title="Название цикла"
          onChange={(e) => this.handleInputValueChange("cycleName", e.target.value)}
          className={b("add-input")}
        />
        <Button
          block
          onClick={() => {
            onCycleCreate(cycleName);
            this.toggleModalVisible("addCycle");
          }}
        >
          Сохранить
        </Button>
      </Modal>
    );
  };

  renderCycles = () => {
    const { cycles, onCycleDelete } = this.props;
    return (
      <>
        {cycles.map((cycleInfo: ICycle, index) => (
          <TreeNode
            switcherIcon={<DownOutlined />}
            checkable
            title={(
              <BooksCycle
                onBookCreateClick={() => {
                  this.setState({ cycleIdForBookCreation: cycleInfo["id"] });
                  this.toggleModalVisible("addBook");
                }}
                onCycleDelete={() => onCycleDelete(cycleInfo["id"])}
                title={`Цикл ${cycleInfo.name}`}
                booksCount={cycleInfo.books?.length}
                key={`books-cycle-${index}`}
              />
            )}
            key={index}
          >
            {cycleInfo?.books?.map((bookInfo: IBook) => (
              <TreeNode title={<BookInfo {...bookInfo} />} />
            ))}
          </TreeNode>
        ))}
      </>
    );
  };

  onDrop = (info) => {
    // const { cycles } = this.state;
    // const {
    //   dropPosition,
    //   dragNode: { key },
    // } = info;
    // const nikogoNetrogalItem = JSON.parse(JSON.stringify(cycles[+dropPosition]));
    // const naehalItem = JSON.parse(JSON.stringify(cycles[+key]));
    //
    // this.setState({
    //   cycles: cycles.map((it, index) => {
    //     if (index === dropPosition) {
    //       return naehalItem;
    //     } else if (index === +key) {
    //       return nikogoNetrogalItem;
    //     }
    //
    //     return it;
    //   }),
    // });
  };

  render() {
    const { className, cycles } = this.props;

    return (
      <section className={classNames(b(), className)}>
        {this.renderAddBookModal()}
        {this.renderAddCycleModal()}
        <div className={b("top")}>
          <h2 className={b("title")}>Мои произведения (0)</h2>
          <div className={b("btn-wrap")}>
            <Button
              block
              size="small"
              onClick={() => this.toggleModalVisible("addBook")}
              className={b("btn", { book: true })}
            >
              Добавить произведение
            </Button>
            <Button
              block
              type="primary"
              size="small"
              onClick={() => this.toggleModalVisible("addCycle")}
              className={b("btn")}
            >
              Добавить цикл
            </Button>
          </div>
        </div>

        {cycles.length > 0 ? (
          <Tree blockNode draggable onDrop={this.onDrop} showIcon>
            {this.renderCycles()}
          </Tree>
        ) : (
          <div className={b("items")}>
            <img src={emptyIcon} alt="Пусто" className={b("empty-img")} />
            <div className={b("empty-text")}>У вас пока нет ни одного произведения.</div>
          </div>
        )}
      </section>
    );
  }
}

const connectedComponent = connect(null, null)(UserCycles);
export { connectedComponent as UserCycles };
