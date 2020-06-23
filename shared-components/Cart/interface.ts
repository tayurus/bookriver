interface ICoAuthor {
  name: string;
  link: string;
}

export interface IProps {
  className?: string;
  title?: string;
  id?: string;
  coAuthors?: ICoAuthor[];
  image?: string;
  priceNum?: number;
  priceSum?: number;
  listCount?: number;
}

export const defaultProps = {
  className: "",
  title: "???",
  id: "??????????",
  coAuthors: {
    name: "???",
    link: "???",
  },
  image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  priceNum: 0,
  priceSum: 0,
  listCount: 1,
};
