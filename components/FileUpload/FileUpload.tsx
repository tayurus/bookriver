import React from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { IProps, defaultProps, IState } from "./interface";

import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { ReactComponent as RemoveIcon } from "~/static/FileUpload/remove.svg";
import { ReactComponent as PhotoIcon } from "~/static/FileUpload/photo.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-file-upload");

export class FileUpload extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  state = {
    fileList: [],
  };

  componentDidMount(): void {
    const { url } = this.props;
    this.setState({
      fileList: url
        ? [
            {
              uid: "-1",
              name: "image.png",
              status: "done",
              url: `${url}?w=100&h=150`,
            },
          ]
        : [],
    });
  }

  onChange = ({ fileList: newFileList }) => {
    if (newFileList.length !== 0) {
      this.setState({ fileList: [newFileList[newFileList.length - 1]] });
      if (newFileList[0]?.status === "done") {
        const { afterUpload } = this.props;
        afterUpload && afterUpload();
      }
    } else {
      this.setState({ fileList: [] });
    }
  };

  onRemove = () => {
    const { onRemove } = this.props;
    onRemove();
    this.setState({ fileList: [] });
  };

  render() {
    const { action, name, className = "", type } = this.props;
    const { fileList } = this.state;

    return (
      <ImgCrop
        rotate
        modalTitle="Редактирование перед загрузкой"
        modalCancel="Отмена"
        modalOk="Загрузить"
        aspect={9 / 16}
      >
        <Upload
          className={classNames(b({ [type]: true }), className)}
          action={action}
          listType="picture-card"
          withCredentials
          // @ts-ignore
          fileList={fileList}
          onChange={this.onChange}
          onRemove={this.onRemove}
          headers={{ Accept: "application/json", "X-Requested-With": null }}
          name={name}
          showUploadList={{
            showPreviewIcon: false,
            showRemoveIcon: true,
            showDownloadIcon: false,
            // @ts-ignore
            removeIcon: (
              <div className={b("remove-icon")}>
                <RemoveIcon />
              </div>
            ),
          }}
        >
          {fileList.length === 0 ? <PhotoIcon /> : null}
        </Upload>
      </ImgCrop>
    );
  }
}
