import { Popover } from "antd";
import React from "react";
import { Button, Input } from "~/components";
import { ReactComponent as SearchIcon } from "~/static/Header/search.svg";
import { IProps } from "../interface";

export const renderSearch = (props: IProps, b: Function, context: any) => {
  const searchOverlay = (
    <div className={b("overlay", { search: true })}>
      <Input
        className={b("search-input")}
        prefix={<SearchIcon className={b("icon", { search: true })} />}
        placeholder="Книга, серия, автор, жанр, ключевое слово"
      />
      <div className={b("search-btn-wrap")}>
        <Button type="primary" block className={b("search-btn")}>
          Найти
        </Button>
      </div>
    </div>
  );

  return (
    <div className={b("search")}>
      <Popover
        onVisibleChange={(visible: boolean) => context.toggleSearchPopover(visible)}
        content={searchOverlay}
        trigger={["click"]}
        placement="right"
        overlayClassName={b("search-popover")}
      >
        {!context.state.searchPopoverVisible && <SearchIcon className={b("icon", { search: true })} />}
      </Popover>
    </div>
  );
};
