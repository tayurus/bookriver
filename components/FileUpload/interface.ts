export interface IProps {
  className?: string;
  type?: string;
  url?: string;
  action?: string;
  name?: string;
  afterUpload?(): any;
  onRemove?(): any;
}

export const defaultProps = {
  className: "",
  type: "",
};

export interface IState {
  fileList: any[];
}
