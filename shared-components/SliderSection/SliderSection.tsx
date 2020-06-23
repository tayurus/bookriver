import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Carousel } from "antd";
import Link from "next/link";
import { IProps, defaultProps } from "./interface";
import { Button, BookCard } from "../../components";

import { ReactComponent as CloseIcon } from "~/static/SliderSection/close.svg";
import { IBook } from "~/types";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("slider-section");

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={b("next-arrow")}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={b("prev-arrow")}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,


  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export const SliderSection = ({
    className,
    title,
    titleLink,
    personal,
    books
  }: IProps) => (
    <div className={classNames(b({ personal }), className)}>
      <div className="site-container">
        <div className={b("header")}>
          <div className={b("title-wrap")}>
            <Link href={titleLink}>
              <h2 className={b("title")}>{title}</h2>
            </Link>
          </div>
          <div className={b("separator")} />
          <div className={b("btn-wrap")}>
            <Button type="link" iconBefore={<CloseIcon />} className={b("btn")}>Скрыть жанр</Button>
          </div>
        </div>
        <div className={b("slider")}>
          <Carousel {...settings}>
            <div className={b("empty-slide")}></div>
            {books.map((it: IBook, index: number) => (
              <BookCard className={b("book")} {...it} key={`author-cycle-book-${index}`} />
            ))}
            <div className={b("empty-slide")}></div>
          </Carousel>
        </div>
      </div>
    </div>
  );

SliderSection.defaultProps = defaultProps;
