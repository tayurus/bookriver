export interface IProps {
  className?: string;
  onRegisterClick?(e: any): void;
  onRecoveryClick?(e: any): void;
  getToken?(email: string, password: string, rememberMe: number): Promise<any>;
  getProviderLoginURL?(provider): Promise<any>;
  me?(): void;
  email?: string;
  password?: string;
  rememberMe?: number;
  onSubmit?: Function;
  message?: string;
}

export const defaultProps: IProps = {
  className: "",
  onRegisterClick: (e: any) => {},
  onRecoveryClick: (e: any) => {},
};

export interface IState {}

export interface IForm {}
