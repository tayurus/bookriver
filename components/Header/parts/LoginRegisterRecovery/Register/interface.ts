export interface IProps {
  className?: string;
  onRegisterClick?(): void;
  onEnterClick?(): void;
  onRecoveryClick?(): void;
  register?(email: string, name: string, password: string): void;
  email?: string;
  name?: string;
  password?: string;
  message?: string;
}

export const defaultProps: IProps = {
  className: "",
  onEnterClick: () => {},
};

export interface IState {}

export interface IForm {}
