import { IBook } from "~/types/Book";

export interface IFinanceOperation {
  date: Object;
  id: number;
  book?: IBook;
  type: {
    title?: string;
    from?: string;
    fromId?: number;
    card?: string;
    percent?: number;
  };
  sum?: number;
}
