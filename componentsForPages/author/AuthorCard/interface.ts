import { IUser } from "~/types";

export interface IProps {
  className?: string;
  userInfo: IUser;
}

export const defaultProps = {
  className: "",
};
