import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Modal } from "antd";
import Link from "next/link";
import { IProps, IState, defaultProps } from "./interface";
import { Status, Button } from "~/components";
import { OptionsPopover } from "../index";
import { ReactComponent as ReadersIcon } from "~/static/ChapterInfo/readers.svg";
import { ReactComponent as EditIcon } from "~/static/ChapterInfo/edit.svg";
import { ReactComponent as MoveIcon } from "~/static/ChapterInfo/move.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("chapter-info");

export class ChapterInfo extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  state = {
    addAudioModalVisible: false,
  };

  toggleModalVisible = (modalName: string) => {
    this.setState({
      addAudioModalVisible: false,
      [`${modalName}ModalVisible`]: !this.state[`${modalName}ModalVisible`],
    });
  };

  renderAddAudioModal = () => {
    const { addAudioModalVisible } = this.state;
    return (
      <Modal
        visible={addAudioModalVisible}
        onCancel={() => this.toggleModalVisible("addAudio")}
        footer={null}
        title="Добавить аудиофайл"
      >
        <div className={b("modal-row")}>
          <Button>Загрузть</Button>
          <div className={b("modal-label")}>или</div>
          <Button>Сгенерировать из текста</Button>
        </div>
        <div className={b("modal-label", { audioSize: true })}>Макс. размер файла: 100 мб</div>
      </Modal>
    );
  };

  render() {
    const { name, updated_at, symbols, id, book_id, className, onDelete } = this.props;
    return (
      <Link href="/book-edit/[bookId]/chapter/[chapterId]" as={`/book-edit/${book_id}/chapter/${id}`}>
        <div className={classNames(b(), className)}>
          {this.renderAddAudioModal()}
          <div className={classNames(b("main"))}>
            <h4 className={classNames(b("title"))}>{name}</h4>
            <div className={classNames(b("bottom"))}>
              <Status label="complete" />
              <div className={classNames(b("info"))}>
                <div className={classNames(b("info-block"))}>
                  <div className={classNames(b("date"))}>
                    <span>{new Date(updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className={classNames(b("info-block"))}>
                  <div className={classNames(b("chars"))}>
                    <span>{symbols}</span>
                  </div>
                </div>
                <div className={classNames(b("info-block"))}>
                  <div className={classNames(b("readers"))}>
                    <ReadersIcon className={b("readers-icon")} />
                    <span>???</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(b("controls"))}>
            <button className={classNames(b("controls-btn"))}>
              <EditIcon />
            </button>
            <button className={classNames(b("controls-btn"))}>
              <MoveIcon />
            </button>
            <div className={classNames(b("controls-menu"))}>
              <OptionsPopover
                options={["Опубликовать", "Удалить", "Добавить аудио"]}
                onAddAudio={() => this.toggleModalVisible("addAudio")}
                onRemove={onDelete}
              />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
