interface ICoAuthor {
  name: string;
  link: string;
}

export interface IPurchaseProps {
  className?: string;
  title?: string;
  id?: string;
  data?: string;
  time?: string;
  coAuthors?: ICoAuthor[];
  image?: string;
  priceNum?: number;
}

export const defaultProps = {
  className: "",
  title: "???",
  id: "??????????",
  data: "??:??:??",
  time: "??:??",
  coAuthors: {
    name: "???",
    link: "???",
  },
  image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  priceNum: 0,
};
