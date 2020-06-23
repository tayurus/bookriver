import React from "react";
import {
  Footer,
  SubscribeCard,
  UserCard,
  SocialNetworkItem,
  Purchase,
  BuyBook,
  Cart,
  SliderSection,
} from "../../shared-components";

const mocks = {
  userInfo: {
    imgUrl: "https://cxl.com/wp-content/uploads/2016/03/nate_munger.png",
    userName: "Констнтин Констнтинов",
    lastSeen: "23:45",
    quote: "Лучше сжечь писателя, чем его книги.",
    subscribers: 228,
  },
  authorBook: {
    title: "Проспавший смерть, опоздавший к рождению",
    coAuthors: [
      { name: "Марина суржевская", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Дмитрий Иванов", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Лансер Гэри", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    genres: [
      { name: "Фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Космическая фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Юмористическая фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Юмористическая фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    pagesCount: 563,
    pagesAddCount: 5,
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    viewsCount: 2564,
    reviewsCount: 2565,
    readCount: 2566,
  },
  purchase: {
    title: "Ветер Севера",
    id: "46824824599",
    coAuthors: [
      { name: "Марина суржевская", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Дмитрий Иванов", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Лансер Гэри", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    priceNum: 473,
  },
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
  financeInfo: {
    virtualSum: 10348,
    blockedSum: 848,
    accountCard: "1245 **** **** 9485 ",
    withdrawSum: 9500,
    isBoundCard: true,
    isCardExpired: true,
    serviceCommission: 145,
  },
  bookCard: {
    titleBook: "Атлант расправил плечи",
    authorBook: "Айн Рэнд",
    descBook:
      "В дивном новом мире женщины не имеют права владеть собственностью, работать, любить, читать и писать. Они не могут бегать по утрам, устраивать пикники и вечеринки, им запрещено вторично. В дивном новом мире женщины Они не могут В дивном новом мире женщины не имеют права владеть собственностью, работать, любить, читать и писать. Они не могут бегать по утрам, устраивать пикники и вечеринки, им запрещено вторично. В дивном новом...",
  },
  previewModal: {
    title: "Ветер Севера",
    id: "46824824599",
    data: "20.03.2020",
    time: "20:04",
    coAuthors: [
      { name: "Марина суржевская", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Дмитрий Иванов", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Лансер Гэри", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    priceNum: 473,
  },
  BuyBook: {
    title: "Проспавший смерть, опоздавший к рождению",
    bookCycle: { name: "Маги без времени", num: 3, link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    coAuthors: [
      { name: "Марина суржевская", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Дмитрий Иванов", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Лансер Гэри", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    genres: [
      { name: "Фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Космическая фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Юмористическая фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Юмористическая фантастика", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],
    bookTags: [
      { name: "Жизненные ценности", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Житейские истории", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Психологическая проза", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Судьба человека", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Шведская литература", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
      { name: "Экранизации", link: "https://img-gorod.ru/24/511/2451179_detail.jpg" },
    ],

    recommendedBooks: [
      {
        name: "Жизненные ценности",
        link: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        cover: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        author: "Марина Суржевская",
        isSound: true,
      },
      {
        name: "Ветер Севера. Риверстейн ",
        link: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        cover: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        author: "Марина Суржевская",
        isSound: false,
      },
      {
        name: "Ветер Севера. Риверстейн ",
        link: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        cover: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        author: "Марина Суржевская",
        isSound: false,
      },
      {
        name: "Ветер Севера. Риверстейн ",
        link: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        cover: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        author: "Марина Суржевская",
        isSound: false,
      },
      {
        name: "Ветер Севера. Риверстейн ",
        link: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        cover: "https://img-gorod.ru/24/511/2451179_detail.jpg",
        author: "Марина Суржевская",
        isSound: false,
      },
    ],
    date: "14:02:2020",
    pagesCount: 563,
    pagesAddCount: 5,
    image: "https://img-gorod.ru/24/511/2451179_detail.jpg",
    readersCount: 323,
    alreadyReadCount: 4232,
    willReadCount: 3213,
    viewsCount: 323,
    recommendCount: 4442,
    annotation:
      "Максим Батырев – известный российский менеджер, обладатель премии «Коммерческий директор года» и «Менеджер года», автор бестселлера «45 татуировок менеджера».\n"
      + "Карьера Максима – яркий пример блестящего вертикального роста. Прошел путь от рядового специалиста, автор бестселлера «45 татуировок менеджера». Карьера Максима – яркий пример блестящего вертикального роста. Прошел путь от рядового специалиста до менеджера и автора",
    authorNote:
      'Третья книга цикла "Путь".\n'
      + "Проды – одна глава по вторникам, в 6.15 по Москве.\n"
      + "Авторская группа в ВК – https://vk.com/ignatov_worlds",
  },
  SliderSection: {
    title: "Фантастика",
    titleLink: "https://img-gorod.ru/24/511/2451179_detail.jpg",
  },
};

class Playground extends React.Component<any, { turnOn: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      turnOn: false,
    };
  }

  handleTurnToggle = () => {
    this.setState((prevState) => ({
      turnOn: !prevState.turnOn,
    }));
  };

  render() {
    return (
      <>
        <div
          style={{
            height: "10vh",
          }}
        />

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
          }}
        >
          <h2>Cart Component</h2>
          <Cart {...mocks.cart} />
          <h2>SliderSection Component</h2>
          <SliderSection {...mocks.SliderSection} />
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
          }}
        >
          <h2>BuyBook Component</h2>
          <BuyBook {...mocks.BuyBook} />
        </div>

        {/* <div */}
        {/*  style={{ */}
        {/*    width: "100%", */}
        {/*    margin: "0 auto 50px", */}
        {/*  }} */}
        {/* > */}
        {/*  <h2>BuyBook Component</h2> */}
        {/*  <BuyBook {...mocks.BuyBook} /> */}
        {/* </div> */}

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
          }}
        >
          <h2>FinanceInfo Component</h2>
          {/* <FinanceInfo {...mocks.financeInfo} /> */}
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
          }}
        >
          <h2>Purchase Component</h2>
          <Purchase {...mocks.purchase} />
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
            background: "#FFFFFF",
            border: "1px solid #F9F9F9",
            boxSizing: "border-box",
            boxShadow: "0px 1px 1px rgba(141, 147, 162, 0.25)",
            borderRadius: "4px",
          }}
        >
          <h2>SocialNetworkItem Component</h2>
          <SocialNetworkItem
            socIcon="vk"
            socName="Вконтакте"
            turnOn={this.state.turnOn}
            onClick={this.handleTurnToggle}
          />
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
          }}
        >
          <h2>SubscribeCard Component</h2>
          <SubscribeCard />
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto 50px",
          }}
        >
          <h2>UserCard Component</h2>
          <UserCard />
        </div>

        <Footer />
      </>
    );
  }
}

export default Playground;
