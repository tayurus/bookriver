export interface IProps {
  className?: string;
  title?: string;
  id?: string;
  image?: string;
  avatarImg?: string;
  userName?: string;
  isBookCover?: boolean;
  userAction?: string;
  bookName?: string;
  time?: string;
  isNew?: boolean;
}

export const defaultProps = {
  className: "",
  title: "???",
  id: "??????????",
  userName: "Роман Романович",
  image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  avatarImg: "https://api.bbookriver.ru/storage/images/users/1/avatar/y3Mj5nr9KzGnsFFAs5xQ5Ynf1LpGDE3FQv6d1Khz.png?w=50&h=50",
  isBookCover: true,
  userAction: "снял с публикации произведение",
  bookName: "Война Родов",
  time: "12.12.2020 в 15:34",
  isNew: false,
};
