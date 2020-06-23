// TODO: описать этот интфрейс в соответствии с тем, что приходит с бека
export interface IChapter {
  author_pages: number;
  book_id: number;
  content: string;
  created_at: string;
  id: number;
  name: string;
  number: number;
  symbols: number;
  updated_at: string;
  // old
  // id: number;
  title?: string;
  date?: string;
  charactersCount?: number | string;
  readersCount?: number;
  status?: string;
}

export interface IChapterUpdate {
  name: string;
  free: boolean;
  content: string;
}

export interface IChapterCreate {
  book_id: number;
  name: string;
  free: boolean;
  content: string;
}
