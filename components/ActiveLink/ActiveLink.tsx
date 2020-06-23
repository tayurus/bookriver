import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
/* Умная ссылка - если путь после "/" в адресной строке совпадает с "href" из просов,
 то ссылка получает css-класс из props.className
  Взято отсюда - https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js */
const ActiveLink = ({ router, children, href, activeClassName, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className || null;
  if (router && router.pathname === href && activeClassName) {
    className = `${className !== null ? className : ""} ${activeClassName}`.trim();
  }

  delete props.activeClassName;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

const connectedComponent = withRouter(ActiveLink);
export { connectedComponent as ActiveLink };
