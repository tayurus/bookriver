import { ICycle } from "~/types/Cycle";

export interface IProps {
  className?: string;
  cycles?: any[];
  onCycleCreate(cycleName: string): void;
  onBookCreate(bookName: string, cycleId: number): void;
  onCycleDelete(cycleId: number): void;
}

export interface IState {
  addBookModalVisible: boolean;
  addCycleModalVisible: boolean;
  cycles?: ICycle[];
  cycleName?: string;
  cycleIdForBookCreation?: number;
}

export const defaultProps = { className: "", cycles: [] };
