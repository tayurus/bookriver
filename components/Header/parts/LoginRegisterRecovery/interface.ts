export interface IProps {
  className?: string;
  data: Record<any, any>;
  onRegisterClick?(): void;
  onEnterClick?(): void;
  onRecoveryClick?(): void;
}

export const defaultProps: IProps = {
  className: "",
  data: {},
  onRegisterClick: () => {},
  onEnterClick: () => {},
  onRecoveryClick: () => {},
};

export interface IState {}

export interface IForm {}
