interface ICoAuthor {
  name: string;
  link: string;
}

interface IGenres {
  name: string;
  link: string;
}

interface ITags {
  name: string;
  link: string;
}

interface IBookCycle {
  name: string;
  num: number | string;
  link: string;
}

interface IRecommendedBooks {
  name: string;
  cover: string;
  link: string;
  author: string;
  isSound: boolean;
}

export interface IProps {
  className?: string;
  cover_url?: string;
  name?: string;
  price?: number;
  updated_at?: string;
  status_complete?: string;
  free?: boolean;
  annotation?: string;
  note?: string;
  age_rating?: string;
  // old
  id?: string;
  bookCycle?: IBookCycle;
  coAuthors?: ICoAuthor[];
  bookTags?: ITags[];
  genres?: IGenres[];
  recommendedBooks?: IRecommendedBooks[];
  pagesCount?: number;
  pagesAddCount?: number;
  image?: string;
  readersCount?: number | string;
  alreadyReadCount?: number | string;
  willReadCount?: number | string;
  viewsCount?: number | string;
  recommendCount?: number | string;
  authorNote?: string;
  showModal?: Function;
}

export const defaultProps = {
  className: "",
  name: "???",
  price: 0,
  updated_at: "??.??.????",
  status_complete: "unknown",
  free: true,
  //old
  id: "228",
  recommendedBooks: [],
  bookTags: [],
  bookCycle: {
    name: "???",
    num: 0,
    link: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  },
  coAuthors: [],
  genres: [],
  pagesCount: 0,
  pagesAddCount: 0,
  readersCount: "?",
  alreadyReadCount: "?",
  willReadCount: "?",
  viewsCount: "?",
  recommendCount: "?",
};
