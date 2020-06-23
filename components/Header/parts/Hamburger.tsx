import React from "react";
import { withNaming } from "@bem-react/classname";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("site-header");

interface IProps {
  hamburgerIsActive?: boolean;

  onClick(): void;
}

export const Hamburger = ({ onClick, hamburgerIsActive }: IProps) => (
  <button onClick={onClick} className={b("hamburger", { "is-active": hamburgerIsActive })} type="button">
    <span className={b("hamburger-box")}>
      <span className={b("hamburger-inner")} />
    </span>
  </button>
);
