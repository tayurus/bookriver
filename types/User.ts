export interface IUser {
  about_me?: string;
  birthday?: Object;
  email?: string;
  gender?: string;
  id?: number;
  name?: string;
  photo_url?: string;
  status?: string;
  username?: string;
  uuid?: string;
}

export interface IUserData {
  name: string;
  birthday: string;
  about_me: string;
  status: string;
  gender: string;
}
