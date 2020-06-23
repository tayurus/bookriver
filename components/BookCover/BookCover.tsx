import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps } from "./interface";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("book-cover");

export const BookCover = ({ className, imgUrl, age }: IProps) => {
  return (
    <div className={classNames(b(), className)}>
      <img
        className={b("img")}
        src={
          imgUrl ||
          "https://vignette.wikia.nocookie.net/tlj/images/a/ac/%D0%9D%D0%B5%D1%82_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8.png/revision/latest?cb=20170128145058&path-prefix=ru"
        }
        alt={imgUrl}
      />
      <div className={b("age-label")}>
        <div className={b("age-num")}>{age}</div>
      </div>
    </div>
  );
};

BookCover.defaultProps = defaultProps;
