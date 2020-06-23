import { IBook } from "~/types/Book";

// export interface ICycle {
//   [attributes["idАвтора:"]]?: number;
//   [attributes["датаСоздания"]]?: string;
//   ["id"]?: number;
//   [attributes["название"]]?: string;
//   [attributes["колВоКниг"]]?: number;
//   [attributes["датаОбновления"]]?: string;
//   title?: string;
//   books?: IBook[];
//   status?: string;
// }

export interface ICycle {
  author_id: number;
  created_at: string;
  id: number;
  name: string;
  numbers_of_books: number;
  updated_at: string;
  books: IBook[];
  status: string;
}
