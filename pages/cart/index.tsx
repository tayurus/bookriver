import React from "react";
import { withNaming } from "@bem-react/classname";
import { OperationsTable, FinanceInfo } from "~/componentsForPages/finance";
import { PrivateRoute } from "~/components";
import { Cart } from "~/shared-components";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("cart-page");

const mocks = {
  cart: {
    title: "Ветер Севера",
    id: "46824824599",
    coAuthors: [
      { name: "Марина суржевская", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Дмитрий Иванов", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Лансер Гэри", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    priceNum: 473,
    priceSum: 2473,
    listCount: 4,
  },
};

class CartPage extends React.Component<any, any> {
  render() {
    return (
      <div className={b()}>
        <Cart {...mocks.cart} />
      </div>
    );
  }
}

export default PrivateRoute(CartPage);
