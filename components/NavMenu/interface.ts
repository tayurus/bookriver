export interface IProps {
  className?: string;
  options?: Array<NavMenuItem>;
  isMobile?: boolean;
}

export interface NavMenuItem {
  title: string;
  href?: string;
  as?: string;
  onClick?(): void;
}
