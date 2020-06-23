export interface IProps {
  className?: string;
  forgot?(email: string): void;
  email?: string;
  message?: string;
}

export const defaultProps: IProps = {
  className: "",
};

export interface IState {}

export interface IForm {}
