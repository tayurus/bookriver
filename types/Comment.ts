export interface ICommentCreate {
  target_id: number;
  target_class: string;
  content: string;
  parent_id?: number;
}

export interface IComment {
  content: string;
  created_at: string;
  id: number;
  target_class: string;
  target_id: number;
  updated_at: string;
}
