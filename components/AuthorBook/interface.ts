interface ICoAuthor {
  name: string;
  link: string;
}

interface IGenres {
  name: string;
  link: string;
}

export interface IAuthorBookProps {
  className?: string;
  title?: string;
  id?: string;
  coAuthors?: ICoAuthor[];
  genres?: IGenres[];
  pagesCount?: number;
  pagesAddCount?: number;
  image?: string;
  viewsCount?: number;
  reviewsCount?: number;
  readCount?: number;
}

export const defaultProps = {
  className: "",
  title: "???",
  id: "228",
  coAuthors: {
    name: "???",
    link: "???",
  },
  genres: "???",
  pagesCount: 0,
  pagesAddCount: 0,
  image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  viewsCount: 0,
  reviewsCount: 0,
  readCount: 0,
};
