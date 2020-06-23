export interface ISocialNetworkItemProps {
  className?: string;
  socIcon?: string;
  turnOn?: boolean;
  onClick?: () => void;
}

export const defaultProps = {
  className: "",
  socIcon: "",
  turnOn: false,
};
