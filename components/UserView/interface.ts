import { IUser } from "~/types";

export interface IUserViewProps {
  className?: string;
  userInfo?: IUser;
  horizont?: boolean;
  isSubscribers: boolean;
  booksNum?: number | string;
  subNum?: number | string;
}

export const defaultProps = {
  className: "",
  userInfo: {},
  isSubscribers: false,
  horizont: false,
  subNum: "???",
  booksNum: "??",
};
