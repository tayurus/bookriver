import { IAuthor } from "~/types/Author";

export type PUBLISHED_STATUS = "not published" | "published" | "deleted";
export type COMPLETE_STATUS = "writing" | "complete" | "reference" | "freeze";

export interface IBook {
  author_id: number;
  cover_url: string;
  created_at: string;
  formats: string[];
  free: boolean;
  id: number;
  name: string;
  price: number;
  status_complete: string;
  status_publish: string;
  type: string;
  updated_at: string;
  symbols: number;
  // old
  imgUrl?: string;
  author?: IAuthor;
  coauthors?: IAuthor[];
  title?: string;
  oldPrice?: string | number;
  eventTitle?: string;
  eventDescription?: string;
}

export interface IBookCreate {
  name: string;
  cycle_id: number;
}

export interface IBookUpdate {
  annotation?: string;
  age_rating?: "0+" | "6+" | "12+" | "16+" | "18+";
  note: string;
  is_foul_language: boolean;
}

export interface IBookLog {
  created_at: string;
  message: string;
}
