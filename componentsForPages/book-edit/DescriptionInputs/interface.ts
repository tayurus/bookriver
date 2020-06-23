import { IBookUpdate, IGenre } from "~/types";

export interface IProps {
  className?: string;
  data: Record<any, any>;
  genres: IGenre[];
  getGenres?(): void;
  removeBookCover?(book_id: number): Promise<any>;
  formValues: IBookUpdate;
  book_id: number;
  dispatch: Function;
  cover_url?: string;
}

export const defaultProps = {
  className: "",
  data: {},
  genres: [],
};

export interface IState {}

export interface IForm {
  firstName?: string;
}

export const getInitialValues = (data) => ({
  annotation: data["annotation"],
  note: data["note"],
  age_rating: data["age_rating"],
  is_foul_language: data["is_foul_language"],
  genres: data["genres"] || [],
});
