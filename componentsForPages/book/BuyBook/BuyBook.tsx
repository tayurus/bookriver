import React, { useState } from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import Link from "next/link";
import { defaultProps, IProps } from "./interface";
import { BookCover, Button, Status } from "~/components";
import { ReactComponent as VkIcon } from "~/static/BuyBook/vk.svg";
import { ReactComponent as OkIcon } from "~/static/BuyBook/ok.svg";
import { ReactComponent as FbIcon } from "~/static/BuyBook/fb.svg";
import { ReactComponent as TwIcon } from "~/static/BuyBook/tw.svg";
import { ReactComponent as LinkIcon } from "~/static/BuyBook/link.svg";
import { ReactComponent as SupIcon } from "~/static/BuyBook/sup.svg";
import { ReactComponent as CartIcon } from "~/static/BuyBook/cart.svg";
import { ReactComponent as DownloadIcon } from "~/static/BuyBook/download.svg";
import { ReactComponent as PlusIcon } from "~/static/BuyBook/plus.svg";
import { ReactComponent as WantReadIcon } from "~/static/BuyBook/want-read.svg";
import { ReactComponent as LikeIcon } from "~/static/BuyBook/like.svg";
import { ReactComponent as DislikeIcon } from "~/static/BuyBook/dislike.svg";
import { ReactComponent as ReadIcon } from "~/static/BuyBook/read.svg";
import { OptionsPopover } from "~/componentsForPages/book-edit";
import { ModalBuyBook } from "~/componentsForPages/book/BuyBook/parts/ModalBuyBook/ModalBuyBook";
import { ModalState } from "~/componentsForPages/book/BuyBook/parts/ModalBuyBook/interface";
import Router from "next/router";
import { pages } from "~/constants/pages";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("buy-book");

export const BuyBook = ({
  className,
  cover_url,
  name,
  price,
  updated_at,
  status_complete,
  free,
  annotation,
  note,
  age_rating,
  // old
  id,
  bookCycle,
  coAuthors,
  genres,
  pagesCount,
  pagesAddCount,
  readersCount,
  alreadyReadCount,
  willReadCount,
  viewsCount,
  recommendCount,
  bookTags,
  recommendedBooks,
  authorNote,
}: IProps) => {
  const coAuthorsArray = coAuthors.map<React.ReactNode>((author, i) => (
    <a className={b("co-author-link")} key={`coAuthorsArray-${i}`} href={author.link}>
      {author.name}
    </a>
  ));

  const coGenresArray = genres.map<React.ReactNode>((genres, i) => (
    <a className={b("genres-link")} key={`coGenresArray-${i}`} href={genres.link}>
      {genres.name}
    </a>
  ));

  const coTagsArray = bookTags.map<React.ReactNode>((bookTags, i) => (
    <a className={b("tags-link")} key={`coGenresArray-${i}`} href={bookTags.link}>
      {bookTags.name}
    </a>
  ));

  const [open, toggleOpen] = useState(false);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setVisible(false);
    goToNextState();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const [stateModal, setStateModal] = useState(ModalState.ChooseDonate);

  const goToNextState = () => {
    if (stateModal < ModalState.Final) {
      setStateModal(stateModal + 1);
    } else {
      handleCancel();
    }
  };

  return (
    <div className={classNames(b(), className)}>
      <div className={b("main-wrap")}>
        <div className={b("content")}>
          <Link href="/book-edit/[id]" as={`/book-edit/${id}`}>
            {/* <a className={b("image")}> */}
            {/*  <img src={cover_url} alt={name} /> */}
            {/* </a> */}
            <BookCover age={age_rating} className={b("image")} imgUrl={cover_url && `${cover_url}?w=300&h=500`} />
          </Link>

          <div className={b("info")}>
            <div className={b("main-info")}>
              <Link href="/book-edit/[id]" as={`/book-edit/${id}`}>
                <a className={b("title")}>{name}</a>
              </Link>
              <div className={b("book-cycle-wrap")}>
                <a href={bookCycle.link} className={b("book-cycle")}>
                  <span className={b("book-cycle-name")}>{bookCycle.name}</span>
                  <span className={b("book-cycle-num")}>{bookCycle.num}</span>
                </a>
              </div>
              <div className={b("co-author")}>{coAuthorsArray}</div>
              <div className={b("genres")}>{coGenresArray}</div>
              <div className={b("info-bottom")}>
                <div className={b("status-wrap")}>
                  <Status label={status_complete} />
                </div>
                <div className={b("date-wrap")}>
                  <div className={b("date")}>{new Date(updated_at).toLocaleDateString()}</div>
                </div>
                <div className={b("pages-wrap")}>
                  <div className={b("pages")}>
                    {pagesCount} <span>(+{pagesAddCount})</span>
                  </div>
                </div>
              </div>
              <div className={b("support-btn-wrap")}>
                <Button onClick={showModal} iconBefore={<SupIcon />}>Поддержать (234)</Button>
                <ModalBuyBook stateModal={stateModal} onOk={handleOk} onCancel={handleCancel} visible={visible} />
              </div>
              <div className={b("audio-wrap")}>
                <audio controls>
                  <source src="" type="audio/ogg" />
                  <source src="" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className={b("purchase-btn-wrap")}>
                <div className={b("purchase-btn-row")}>
                  <div className={b("purchase-btn-read")}>
                    <Button
                      block
                      type="primary"
                      onClick={() => Router.push(`${pages.reader}/[bookId]`, `${pages.reader}/${id}`)}
                    >
                      Читать
                    </Button>
                  </div>
                  <div className={b("purchase-btn-download")}>
                    <Button>
                      <DownloadIcon />
                    </Button>
                  </div>
                </div>
                {!free && (
                  <div className={b("purchase-btn-row")}>
                    <div className={b("purchase-btn-buy")}>
                      <Button block type="secondary">
                        {`Купить за ${price} ₽`}
                      </Button>
                    </div>
                    <div className={b("purchase-btn-cart")}>
                      <Button>
                        <CartIcon />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={b("sub-info")}>
              <div className={b("stats")}>
                <table cellPadding="0" className={b("stats-table")}>
                  <tr className={b("stats-tr")}>
                    <th className={b("stats-table-top")}>читают</th>
                    <th className={b("stats-table-top")}>прочитали</th>
                    <th className={b("stats-table-top")}>будут читать</th>
                    <th className={b("stats-table-top")}>просмотры</th>
                    <th className={b("stats-table-top")}>рекомендуют</th>
                  </tr>

                  <tr className={b("stats-tr")}>
                    <td className={b("stats-table-bottom")}>{readersCount}</td>
                    <td className={b("stats-table-bottom")}>{alreadyReadCount}</td>
                    <td className={b("stats-table-bottom")}>{willReadCount}</td>
                    <td className={b("stats-table-bottom")}>{viewsCount}</td>
                    <td className={b("stats-table-bottom")}>{recommendCount}</td>
                  </tr>
                </table>
              </div>
              <div className={b("system-btn-wrap")}>
                <div className={b("hover-menu-wrap")}>
                  <Button onClick={() => toggleOpen(!open)} iconBefore={<PlusIcon />} className={b("hover-btn")}>
                    В библиотеку
                  </Button>
                  <div className={b("hover-menu", { open })}>
                    <ul className={b("hover-menu-list")}>
                      <li className={b("hover-menu-item")}>
                        <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                          <WantReadIcon />
                          <span>Хочу прочитать</span>
                        </a>
                      </li>
                      <li className={b("hover-menu-item")}>
                        <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                          <LikeIcon />
                          <span>Прочитал, нравится</span>
                        </a>
                      </li>
                      <li className={b("hover-menu-item")}>
                        <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                          <DislikeIcon />
                          <span>Прочитал, не нравится</span>
                        </a>
                      </li>
                      <li className={b("hover-menu-item")}>
                        <a onClick={() => toggleOpen(!open)} href="#" className={b("hover-menu-link")}>
                          <ReadIcon />
                          <span>Читаю</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={b("system-info-btn")}>
                  <OptionsPopover options={["Пожаловаться"]} onAddAudio={() => this.toggleModalVisible("addAudio")} />
                </div>
              </div>
              <div className={b("book-share")}>
                <div className={b("book-share-title")}>Расскажите о книге друзьям</div>
                <div className={b("book-share-text")}>
                  Получи 15% c каждой книги купленной другом в течение 2 месяцев
                </div>
                <div className={b("book-share-link-wrap")}>
                  <a href="#" className={b("book-share-link")}>
                    <VkIcon />
                  </a>
                  <a href="#" className={b("book-share-link")}>
                    <OkIcon />
                  </a>
                  <a href="#" className={b("book-share-link")}>
                    <FbIcon />
                  </a>
                  <a href="#" className={b("book-share-link")}>
                    <TwIcon />
                  </a>
                  <a href="#" className={b("book-share-link")}>
                    <LinkIcon />
                  </a>
                </div>
              </div>
              <div className={b("tags")}>
                <div className={b("tags-group")}>{coTagsArray}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={b("sub-wrap")}>
        <div className={b("desc-wrap")}>
          <div className={b("annotation")}>
            <div className={b("wrap-title")}>Аннотация</div>
            <div className={b("wrap-text")}>{annotation}</div>
            <a href="#" className={b("wrap-link")}>
              Подробнее
            </a>
          </div>
          <div className={b("author-note")}>
            <div className={b("wrap-title")}>Примечание автора</div>
            <div className={b("wrap-text")}>{note}</div>
            <a href="#" className={b("wrap-link")}>
              Подробнее
            </a>
          </div>
        </div>
        <div className={b("recommended")}>
          <div className={b("wrap-title")}>Рекомендуемые книги</div>
          <div className={b("recommended-group")}>
            {recommendedBooks.map((book) => (
              <div className={b("recommended-block")}>
                <div className={b("recommended-block-image")}>
                  <img src={book.cover} alt={book.cover} />
                </div>
                <div className={b("recommended-block-info")}>
                  <Link href={`book/${id}`}>
                    <a className={b("recommended-block-title")}>{book.name}</a>
                  </Link>

                  <div className={b("recommended-block-author")}>{book.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

BuyBook.defaultProps = defaultProps;
