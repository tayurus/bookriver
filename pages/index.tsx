import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { SliderSection } from "~/shared-components";
import { BooksFilter } from "~/componentsForPages/my-books/BooksFilter/BooksFilter";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_"
});
const b = cn("main-page");

const mocks = {
  SliderSection1: {
    title: "Фантастика",
    titleLink: "/my-books",
    personal: false
  },
  SliderSection2: {
    title: "Детектив",
    titleLink: "/my-books",
    personal: false
  },
  SliderSection3: {
    title: "Персональные рекомендации",
    titleLink: "/my-books",
    personal: true
  },
  SliderSection4: {
    title: "Фантастика",
    titleLink: "/my-books",
    personal: false
  },
  SliderSection5: {
    title: "Фантастика",
    titleLink: "/my-books",
    personal: false
  }
};

class MainPage extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          marginTop: "30px"
        }}
      >
        <div className="site-container">
          <BooksFilter className={b("filters")}/>
        </div>
        <SliderSection {...mocks.SliderSection1} />
        <SliderSection {...mocks.SliderSection2} />
        <SliderSection {...mocks.SliderSection3} />
        <SliderSection {...mocks.SliderSection4} />
        <SliderSection {...mocks.SliderSection5} />
      </div>
    );
  }
}

export default MainPage;
