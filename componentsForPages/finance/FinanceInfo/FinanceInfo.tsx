import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Popover } from "antd";
import { Status, Button } from "../../../components";
import { IFinanceInfoProps, defaultProps } from "./interface";
import { ReactComponent as LockIcon } from "~/static/FinanceInfo/lock.svg";
import { ReactComponent as TrashIcon } from "~/static/FinanceInfo/trash.svg";
import { ReactComponent as VisaIcon } from "~/static/FinanceInfo/visa.svg";
import { ReactComponent as PlusIcon } from "~/static/FinanceInfo/plus.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("finance-info");

export const FinanceInfo = ({
  className,
  accountCard,
  blockedSum,
  isBoundCard,
  virtualSum,
  withdrawSum,
  isCardExpired,
  serviceCommission,
}: IFinanceInfoProps) => (
  <div className={classNames(b(), className)}>
    <div className={b("wrap")}>
      <div className={b("row")}>
        <div className={b("name")}>Виртуальная карта</div>
        <div className={b("info")}>
          <div className={b("virtual-card")}>{virtualSum}</div>
        </div>
      </div>
      <div className={b("row")}>
        <div className={b("name")}>Заблокированная сумма</div>
        <div className={b("info")}>
          <div className={b("blocked-sum")}>
            <LockIcon />
            <Popover
              overlayClassName={b("blocked-sum-popover")}
              content="Средства будут разблокированы через 3 дня после завершения написания книги"
            >
              <span>{blockedSum}</span>
            </Popover>
          </div>
        </div>
      </div>
      <div className={b("row")}>
        <div className={b("name")}>Привязанная карта</div>
        <div className={b("info")}>
          <div className={b("account-card", { "card-expired": isCardExpired })}>
            <VisaIcon />
            <span>{accountCard}</span>
          </div>
          {isCardExpired && (
            <div className={b("status-wrap")}>
              <Status label="карта просрочена" />
            </div>
          )}
          <Button type="link" iconBefore={<TrashIcon />} className={b("link")}>
            Удалить и привязать другую
          </Button>
        </div>
      </div>
      <div className={b("row")}>
        <div className={b("name")}>Доступно для вывода</div>
        <div className={b("info")}>
          <div className={b("withdraw-sum")}>{withdrawSum}</div>
          <div className={b("withdraw-btn-wrap")}>
            <Button type="primary" className={b("withdraw-btn")}>
              Вывести
              {' '}
              {withdrawSum - serviceCommission}
              {' '}
              ₽
            </Button>
            <div className={b("withdraw-pay-commission")}>
              Комиссия сервиса —
              {serviceCommission}
              {' '}
              ₽
            </div>
          </div>
        </div>
      </div>
      {isBoundCard && (
        <div className={b("col")}>
          <div className={b("row")}>
            <div className={b("name")}>Банковская карта</div>
            <div className={b("info")}>
              <div className={b("bound-card-text")}>Не привязана</div>
              <Button iconBefore={<PlusIcon />} className={b("bound-card-btn")}>
                Привязать карту
              </Button>
            </div>
          </div>
          <div className={b("row")}>
            <div className={b("info-block")}>
              <h4 className={b("info-block-title")}>
                Привяжите банковскую карту для приема платежей и вывода средств.
              </h4>
              <p className={b("info-block-text")}>
                Начните зарабатывать на своих книгах прямо сейчас.
                {" "}
                <a className={b("info-block-link")} href="#">
                  Подробнее
                </a>
              </p>
              <p className={b("info-block-text")}>
                Становитесь партнером, зарабатывайте, привлекая друзей и интегрируя сервис в свои сайты.
                {" "}
                <a className={b("info-block-link")} href="#">
                  Подробнее
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

FinanceInfo.defaultProps = defaultProps;
