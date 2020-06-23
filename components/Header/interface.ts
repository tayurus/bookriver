import { IBook, IUser } from "~/types";

export interface IProps {
  userBooks?: IBook[];
  basketBooks?: IBook[];
  user?: IUser;
  b: Function;
  notifications: IBook[]; // то, что уведомление имеет тип "Книга" - это временно, потом нужно будет описать отдельный тип
  logout?(): void;

  router: any;
}

export interface IState {
  enterModalVisible?: boolean;
  registerModalVisible?: boolean;
  recoveryModalVisible?: boolean;
  searchPopoverVisible?: boolean;
  hamburgerIsActive?: boolean;
}

export const defaultProps = {
  books: [],
  basketBooks: [],
  notifications: [],
  user: {},
};
