import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState } from "./interface";
import { Popover } from "antd";
import { ReactComponent as DotsIcon } from "~/static/OptionsPopover/dots.svg";
import { ReactComponent as AddIcon } from "~/static/OptionsPopover/add.svg";
import { ReactComponent as DelAudioIcon } from "~/static/OptionsPopover/del-audio.svg";
import { ReactComponent as HoldIcon } from "~/static/OptionsPopover/hold.svg";
import { ReactComponent as PublishIcon } from "~/static/OptionsPopover/publish.svg";
import { ReactComponent as RemoveIcon } from "~/static/OptionsPopover/remove.svg";
import { ReactComponent as UnholdIcon } from "~/static/OptionsPopover/unhold.svg";
import { ReactComponent as ReportIcon } from "~/static/OptionsPopover/report.svg";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("options-popover");

export class OptionsPopover extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, options, onHold, onRemove, onDelAudio, onPublish, onAddAudio, onUnhold } = this.props;

    const optionsList = {
      Заморозить: (label: string) => (
        <div className={b("item")} onClick={onHold} key={"option-1"}>
          <HoldIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
      Удалить: (label: string) => (
        <div
          className={b("item")}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          key={"option-2"}
        >
          <RemoveIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
      "Удалить аудио": (label: string) => (
        <div className={b("item")} onClick={onDelAudio} key={"option-3"}>
          <DelAudioIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
      Опубликовать: (label: string) => (
        <div
          className={b("item")}
          onClick={(e) => {
            e.stopPropagation();
            onPublish();
          }}
          key={"option-4"}
        >
          <PublishIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
      "Добавить аудио": (label: string) => (
        <div
          className={b("item")}
          onClick={(e) => {
            e.stopPropagation();
            onAddAudio();
          }}
          key={"option-5"}
        >
          <AddIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
      Разморозить: (label: string) => (
        <div className={b("item")} onClick={onUnhold} key={"option-6"}>
          <UnholdIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
      Пожаловаться: (label: string) => (
        <div className={b("item")} onClick={onUnhold} key={"option-7"}>
          <ReportIcon className={b("icon")} />
          <span className={b("label")}>{label}</span>
        </div>
      ),
    };

    const overlay = <div className={b("inner")}>{options.map((it) => optionsList[it](it))}</div>;

    return (
      <Popover
        className={classNames(b(), className)}
        content={overlay}
        trigger={["click"]}
        placement="bottomRight"
        overlayClassName={b("overlay")}
      >
        <div className={b("dots-icon")}>
          <DotsIcon />
        </div>
      </Popover>
    );
  }
}
