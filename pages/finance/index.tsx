import React from "react";
import { withNaming } from "@bem-react/classname";
import { OperationsTable, FinanceInfo } from "~/componentsForPages/finance";
import { PrivateRoute } from "~/components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("finance-page");

const mocks = {
  operations: [
    {
      date: new Date(),
      id: 4324,
      book: { title: "Ветер Севера. Риверстейн", price: 500 },
      type: {
        title: "Продажа книги",
      },
      sum: 500,
    },
    {
      date: new Date(),
      id: 434324,
      book: { title: "Ветер Севера. Риверстейн", price: 500 },
      type: {
        title: "Покупка книги",
      },
      sum: 500,
    },
    {
      date: new Date(),
      id: 4324,
      book: { title: "Ветер Севера. Риверстейн", price: 500 },
      type: {
        title: "Продажа книги",
      },
      sum: 500,
    },
    {
      date: new Date(),
      id: 434324,
      book: { title: "Ветер Севера. Риверстейн", price: 500 },
      type: {
        title: "Покупка книги",
      },
      sum: 500,
    },
  ],
};

class FinancePage extends React.Component<any, any> {
  render() {
    return (
      <div className={b()}>
        <FinanceInfo className={b("info")} />
        {/* <OperationsTable operations={mocks.operations} /> */}
      </div>
    );
  }
}

export default PrivateRoute(FinancePage);
