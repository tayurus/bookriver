export interface IProps {
  className?: string;
  current_password?: string;
  new_password?: string;
  updateMePassword?(current_password: string, new_password: string): Promise<void>;
  deleteMe?(): Promise<void>;
  getProviderConnectURL?(provider: string): Promise<string>;
  disconnectProvider?(provider: string): Promise<string>;
  me?(): Promise<void>;
  attached_social_accounts: string[];
}

export const defaultProps = {
  className: "",
  attached_social_accounts: [],
};

export interface IState {
  deleteAccountModalVisible: boolean;
}
