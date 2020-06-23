export interface IProps {
  className?: string;
  options?: string[];
  onHold?(): void;
  onRemove?(): void;
  onDelAudio?(): void;
  onPublish?(): void;
  onAddAudio?(): void;
  onUnhold?(): void;
}

export const defaultProps = {
  className: "",
  options: [],
  onHold: () => {},
  onRemove: () => {},
  onDelAudio: () => {},
  onPublish: () => {},
  onAddAudio: () => {},
  onUnhold: () => {},
};

export interface IState {}
