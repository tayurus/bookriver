interface ICoAuthor {
  name: string;
  link: string;
}

export interface IProps {
  className?: string;
  modalOpen?: boolean;
  closeModal?: () => void;
  id?: string;
  title?: string;
  coAuthors?: ICoAuthor[];
  image?: string;
  price?: number;
}

export const defaultProps = {
  className: "",
  modalOpen: false,
  id: "??????????",
  title: "???",
  coAuthors: {
    name: "???",
    link: "???",
  },
  price: 0,
  image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
};
