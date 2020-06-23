export interface IFinanceInfoProps {
  className?: string;
  virtualSum?: number;
  blockedSum?: number;
  accountCard?: string;
  withdrawSum?: number;
  isBoundCard?: boolean;
  isCardExpired?: boolean;
  serviceCommission?: number;
}

export const defaultProps = {
  className: "",
  virtualSum: 0,
  blockedSum: 0,
  accountCard: "???? **** **** ????",
  withdrawSum: 0,
  isBoundCard: true,
  isCardExpired: true,
  serviceCommission: 0,
};
