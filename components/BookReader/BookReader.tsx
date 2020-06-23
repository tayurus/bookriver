import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Divider, Popover } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { IProps, defaultProps, IState } from "./interface";
import { IAuthor, IChapter } from "~/types";
import { Button, Slider, Switch } from "~/components";
import { ReactComponent as ArrowLeftIcon } from "~/static/BookReader/arrowLeft.svg";
import { ReactComponent as SettingsIcon } from "~/static/BookReader/settings.svg";
import { ReactComponent as FullScreenIcon } from "~/static/BookReader/fullScreen.svg";
import { ReactComponent as BookFormatIcon } from "~/static/BookReader/bookFormat.svg";
import { ReactComponent as FontSizeIcon } from "~/static/BookReader/fontSize.svg";
import { ReactComponent as FontIcon } from "~/static/BookReader/font.svg";
import Router from "next/router";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-reader");

export class BookReader extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  state = {
    isBookFormat: false,
    font: "Gilroy",
    fontSize: 26,
    fontSelectVisible: false,
    currentChapterIndex: 0,
  };

  handleFieldChange = (fieldName: "isBookFormat" | "font" | "fontSize" | "fontSelectVisible", value) => {
    // @ts-ignore
    this.setState({ [fieldName]: value });
  };

  /* меняет режим с полноэкранного на обычный и наоборот */
  toggleFullScreen = () => {
    if (!document?.fullscreenElement) {
      document?.documentElement.requestFullscreen();
    } else if (document?.exitFullscreen) {
      document?.exitFullscreen();
    }
  };

  handleCurrentChapterIndexChange = (newChapterIndex: number) => {
    this.setState({ currentChapterIndex: newChapterIndex });
  };

  /* рисует список глав */
  renderChaptersOverlay = () => {
    const {
      chaptersList,
      bookInfo: { name, author, coauthors },
    } = this.props;

    const { currentChapterIndex } = this.state;
    return (
      <div className={b("chapters-overlay-content")}>
        <div className={b("book-title", { gray: true })}>{name}</div>
        <div className={b("book-authors")}>
          {author?.name},{coauthors?.map((it: IAuthor) => it?.name).join(", ")}
        </div>
        <Divider className={b("chapters-divider")} />
        {chaptersList.map((it: IChapter, index: number) => (
          <div
            className={b("chapters-list-item", { active: currentChapterIndex === index })}
            key={`reader-chapter-${index}`}
            onClick={() => this.handleCurrentChapterIndexChange(index)}
          >
            {it.name}
          </div>
        ))}
      </div>
    );
  };

  /* рисует выпадашку настроек читалки */
  renderSettingsOverlay = () => {
    const { fontSize, isBookFormat } = this.state;

    return (
      <div className={b("settings-overlay-content")}>
        <div className={b("settings-row")}>
          <div className={b("setting-name-wrapper")}>
            <BookFormatIcon />
            <span className={b("setting-name")}>Книжный формат</span>
          </div>
          <Switch
            onChange={(checked: boolean) => this.handleFieldChange("isBookFormat", checked)}
            className={b("book-format-switch")}
            checkedChildren="Вкл."
            unCheckedChildren="Выкл."
            checked={isBookFormat}
          />
        </div>
        <div className={b("settings-row")}>
          <div className={b("setting-name-wrapper")}>
            <FontIcon />
            <span className={b("setting-name")}>Шрифт</span>
          </div>
          {this.renderFontSelect()}
        </div>
        <div className={b("settings-row")}>
          <div className={b("setting-name-wrapper")}>
            <FontSizeIcon />
            <span className={b("setting-name")}>Размер шрифта</span>
          </div>
          <span className={b("setting-value")}>{fontSize}</span>
        </div>
        <div className={b("settings-row")}>
          <Slider
            tooltipVisible={false}
            value={fontSize}
            min={10}
            max={36}
            onChange={(value: number) => this.handleFieldChange("fontSize", value)}
          />
        </div>
      </div>
    );
  };

  /* рисует список для выбора шрифта */
  renderFontSelect = () => {
    const { fontSelectVisible, font } = this.state;
    const fonts = ["Gilroy", "Roboto", "Times New Roman"];

    return (
      <div className={b("font-select")}>
        <div
          className={b("font-option")}
          onClick={() => this.handleFieldChange("fontSelectVisible", !fontSelectVisible)}
        >
          {font}
        </div>

        {fontSelectVisible && (
          <div className={b("font-select-options")}>
            {fonts.map(
              (fontName: string, index: number) =>
                fontName !== font && (
                  <div
                    onClick={() => {
                      this.handleFieldChange("font", fontName);
                      this.handleFieldChange("fontSelectVisible", false);
                    }}
                    className={b("font-option")}
                    key={`font-select-${index}`}
                  >
                    {fontName}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    );
  };

  renderTopPanel = () => {
    const {
      bookInfo: { name },
    } = this.props;

    return (
      <div className={b("top")}>
        <div className={b("top-inner")}>
          <Button onClick={() => Router.back()} iconBefore={<ArrowLeftIcon />} type="transparent">
            Назад
          </Button>

          <Popover
            className={b()}
            content={this.renderChaptersOverlay()}
            trigger={["click"]}
            placement="bottomRight"
            overlayClassName={b("chapters-overlay")}
          >
            <div className={b("popover-chapters-inner")}>
              <div className={b("book-title")}>{name}</div>
              <FontAwesomeIcon icon={faSortDown} className={b("popover-arrow")} />
            </div>
          </Popover>

          <div className={b("btns-wrapper")}>
            <Popover
              className={b()}
              content={this.renderSettingsOverlay()}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName={b("settings-overlay")}
            >
              <div className={b("popover-settings-inner")}>
                <Button className={b("small-btn")}>
                  <SettingsIcon />
                </Button>
              </div>
            </Popover>

            <Button onClick={this.toggleFullScreen} className={b("small-btn")}>
              <FullScreenIcon />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { className, chaptersList } = this.props;
    const { currentChapterIndex } = this.state;
    const { font, fontSize, isBookFormat } = this.state;
    return (
      <div className={classNames(b(), className)}>
        {this.renderTopPanel()}
        <div className={b("content-wrapper")}>
          <div className={b("chapter-title")}>{chaptersList[currentChapterIndex]?.name}</div>
          <div
            className={b("content")}
            style={{ fontSize, fontFamily: font, columnCount: isBookFormat ? 2 : 1 }}
            dangerouslySetInnerHTML={{ __html: chaptersList[currentChapterIndex]?.content }}
          />
        </div>
      </div>
    );
  }
}
