import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { Modal } from "antd";
import Link from "next/link";
import { IProps, defaultProps } from "./interface";
import { Button, Status } from "../../components";

import { ReactComponent as NextArrowIcon } from "./images/next-arrow.svg";
import { ReactComponent as PrevArrowIcon } from "./images/prev-arrow.svg";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-content-preview-modal");

export const BookContentPreviewModal = ({
  className,
  modalOpen,
  closeModal,
  coAuthors,
  id,
  image,
  title,
  price,
}: IProps) => {
  const coAuthorsArray = coAuthors.map<React.ReactNode>((author, i) => (
    <a className={b("header-co-author-link")} key={i} href={author.link}>
      {author.name}
    </a>
  ));

  return (
    <Modal
      className={classNames(b(), className)}
      title={(
        <div className={b("header")}>
          <div className={b("header-content")}>
            <div className={b("header-image")}>
              <img src={image} alt={image} />
            </div>
            <div className={b("header-info")}>
              <Link href={`book/${id}`}>
                <a className={b("header-title")}>{title}</a>
              </Link>
              <div className={b("header-status-wrap")}>
                <Status label="аудиокнига" />
              </div>

              <div className={b("header-co-author")}>{coAuthorsArray}</div>
            </div>
          </div>
          <div className={b("header-btn-wrap")}>
            <Button size="small" type="primary" onClick={closeModal}>
              Открыть в читалке
            </Button>
          </div>
        </div>
      )}
      visible={modalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={(
        <footer className={b("footer")}>
          <div className={b("footer-btn-wrap")}>
            <Button size="small" iconBefore={<PrevArrowIcon />}>
              Предыдущая глава
            </Button>
            <Button size="small" type="secondary">
              Купить книгу за
              {price}
              {' '}
              ₽
            </Button>
            <Button size="small" iconAfter={<NextArrowIcon />}>
              Следующая глава
            </Button>
          </div>
          <div className={b("footer-end-text")}>Конец ознакомительного фрагмента</div>
        </footer>
      )}
    >
      <div className={b("body")}>
        <h3>Глава 1. Разгребая проблемы, которые и не думают заканчиваться</h3>
        <p>
          Пройти кольцо оцепления оказалось несложно - для невидимки, само собой. Гоблины держали под наблюдением стены
          и основные подходы, но, стоило миновать их посты, как угроза обнаружения практически исчезла. Конечно, по
          городу сновало немало отрядов, но большая их часть охотилась в противоположной стороне.
          {" "}
        </p>
        <p>
          Удалившись достаточно, я укрылся в одном из домов и, наконец, вышел из невидимости. Большую часть пути
          пришлось бежать, так что отдых был не лишним. Задумчиво покатав в ладони изрядно полегчавший кристалл, я убрал
          его сумку. Позволять им рассыпаться в пыль, используя до упора, было не рационально. Теоретически, такие
          кристаллы можно было заряжать, или даже создавать за счет собственной маны, но для этого требовалось немалое
          умение и контроль. Ну, или соответствующий навык…
          {" "}
        </p>
        <p>
          Таймер отсчитал последние секунды и “окно” захлопнулось. Все, теперь передумать и сбежать уже не получится. Не
          сегодня. Даже трудно сказать, чего было в этой мысли больше – разочарования или облегчения. Я бы соврал, если
          бы сказал, что не испытывал соблазна сбежать…
          {" "}
        </p>
        <p>
          - Что ж, настало время перекусить. – резюмировал я, вытаскивая сухой паек. Само собой, о провизии я
          позаботился, учтя тот факт, что разводить костер будет не лучшей идеей.
          {" "}
        </p>
        <p>
          Торопиться мне, по большому счету, было некуда. Город огромен и дорога предстоит долгая, только и времени у
          меня с избытком. Особенно с учетом того, что лезть к храму я, на этот раз, не собирался. В принципе, мой план
          был разбит на множество этапов и отличался немалой вариативностью.
        </p>
        <p>
          По карте, в четвертом кольце стен не было проломов, лишь ворота, расположенные в противоположной от меня части
          города. Что, собственно, и позволило образоваться здесь своеобразной “буферной зоне”, где западная половина
          кольца “принадлежала” гоблинам, а восточная - нежити.
          {" "}
        </p>
        <p>
          - Что ж, настало время перекусить. – резюмировал я, вытаскивая сухой паек. Само собой, о провизии я
          позаботился, учтя тот факт, что разводить костер будет не лучшей идеей.
          {" "}
        </p>
        <p>
          Торопиться мне, по большому счету, было некуда. Город огромен и дорога предстоит долгая, только и времени у
          меня с избытком. Особенно с учетом того, что лезть к храму я, на этот раз, не собирался. В принципе, мой план
          был разбит на множество этапов и отличался немалой вариативностью.
        </p>
        <p>
          По карте, в четвертом кольце стен не было проломов, лишь ворота, расположенные в противоположной от меня части
          города. Что, собственно, и позволило образоваться здесь своеобразной “буферной зоне”, где западная половина
          кольца “принадлежала” гоблинам, а восточная - нежити.
          {" "}
        </p>
      </div>
    </Modal>
  );
};

BookContentPreviewModal.defaultProps = defaultProps;
