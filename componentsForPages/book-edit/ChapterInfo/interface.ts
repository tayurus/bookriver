import { IChapter } from "~/types";

export interface IProps extends IChapter {
  className?: string;
  onDelete?(): void;
}

export interface IState {
  addAudioModalVisible: boolean;
}

export const defaultProps = {
  className: "",
  title: "Без названия",
  date: "??.??.????",
  charactersCount: "?",
  readersCount: "?",
};
