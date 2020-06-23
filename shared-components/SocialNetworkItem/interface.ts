export interface ISocialNetworkItemProps {
  className?: string;
  socName?: string;
  socIcon?: string;
  turnOn?: boolean;
  onClick?: () => void;
}

export const defaultProps = {
  className: "",
  socName: "??????",
  socIcon: "",
  turnOn: false,
};
