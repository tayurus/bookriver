import React from "react";
import {withNaming} from "@bem-react/classname";
import {Menu, Drawer} from "antd";
import {AppstoreOutlined, BookOutlined, SettingOutlined} from "@ant-design/icons";
import {Button, Input} from "~/components";
import {ReactComponent as SearchIcon} from "~/static/Header/search.svg";

const {SubMenu} = Menu;

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("header-mob-nav");

interface IProps {
  mobNavIsActive?: boolean;

  onExitClick();
}

export const HeaderMobNav = ({onExitClick, mobNavIsActive}: IProps) => {
  const handleClick = (e) => {
    onExitClick();
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onExitClick();
  };


  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={handleClose}
      getContainer={false}
      visible={mobNavIsActive}
      className={b("drawer")}
      style={{position: 'fixed', top: '90px'}}
      width={276}
    >


      <div className={b("search-wrap", {search: true})}>
        <div className={b("search-btn-wrap")}>
          <Button className={b("search-btn")}>
            <SearchIcon/>
          </Button>
        </div>
        <Input className={b("search-input")} placeholder="Книга, серия, автор, жанр, ключевое слово"/>
      </div>
      <Menu
        onClick={handleClick}
        className={b("menu")}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub999"
          title={(
            <span>
                <SettingOutlined/>
                <span>Библиотека</span>
              </span>
          )}
        >
          <Menu.Item key="1" icon={<BookOutlined/>}>
            Новинки
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined/>}>
            Аудиокниги
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined/>}>
            Боевик
          </Menu.Item>
          <Menu.Item key="4" icon={<BookOutlined/>}>
            Историческая проза
          </Menu.Item>
          <Menu.Item key="5" icon={<BookOutlined/>}>
            ЛитРПГ
          </Menu.Item>
          <Menu.Item key="6" icon={<BookOutlined/>}>
            Мистика
          </Menu.Item>
          <Menu.Item key="7" icon={<BookOutlined/>}>
            Подростковая проза
          </Menu.Item>
          <Menu.Item key="8" icon={<BookOutlined/>}>
            Политический роман
          </Menu.Item>
          <Menu.Item key="9" icon={<BookOutlined/>}>
            Современная проза
          </Menu.Item>
          <Menu.Item key="10" icon={<BookOutlined/>}>
            Триллер
          </Menu.Item>
          <Menu.Item key="11" icon={<BookOutlined/>}>
            Ужасы
          </Menu.Item>
          <Menu.Item key="12" icon={<BookOutlined/>}>
            Приключения
          </Menu.Item>
          <Menu.Item key="13" icon={<BookOutlined/>}>
            Фанфик
          </Menu.Item>
          <Menu.Item key="14" icon={<BookOutlined/>}>
            Юмор
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={(
              <span>
                  <SettingOutlined/>
                  <span>Фантастика</span>
                </span>
            )}
          >
            <Menu.Item key="15">Альтернативная история </Menu.Item>
            <Menu.Item key="16">Антиутопия</Menu.Item>
            <Menu.Item key="17">Боевая фантастика</Menu.Item>
            <Menu.Item key="18">Героическая фантастика</Menu.Item>
            <Menu.Item key="19">Киберпанк</Menu.Item>
            <Menu.Item key="20">Космическая фантастика</Menu.Item>
            <Menu.Item key="21">Научная фантастика</Menu.Item>
            <Menu.Item key="22">Постапокалипсис</Menu.Item>
            <Menu.Item key="23">Социальная фантастика</Menu.Item>
            <Menu.Item key="24">Стимпанк</Menu.Item>
            <Menu.Item key="25">Юмористическая фантастика</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Фэнтези">
            <Menu.Item key="26">Боевое фэнтези</Menu.Item>
            <Menu.Item key="27">Героическое фэнтези </Menu.Item>
            <Menu.Item key="28">Городское фэнтези</Menu.Item>
            <Menu.Item key="29">Историческое фэнтези</Menu.Item>
            <Menu.Item key="30">Темное фэнтези</Menu.Item>
            <Menu.Item key="31">Эпическое фэнтези</Menu.Item>
            <Menu.Item key="32">Юмористическое фэнтези</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={(
              <span>
                  <SettingOutlined/>
                  <span>Попаданцы</span>
                </span>
            )}
          >
            <Menu.Item key="33">Попаданцы в космос</Menu.Item>
            <Menu.Item key="34">Попаданцы в магические миры</Menu.Item>
            <Menu.Item key="35">Попаданцы во времени</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={(
              <span>
                  <SettingOutlined/>
                  <span>Любовные романы</span>
                </span>
            )}
          >
            <Menu.Item key="36">Исторический любовный роман</Menu.Item>
            <Menu.Item key="37">Короткий любовный роман</Menu.Item>
            <Menu.Item key="38">Любовная фантастика</Menu.Item>
            <Menu.Item key="39">Любовное фэнтези</Menu.Item>
            <Menu.Item key="40">Современный любовный роман</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={(
              <span>
                  <SettingOutlined/>
                  <span>Эротика</span>
                </span>
            )}
          >
            <Menu.Item key="41">Романтическая эротика</Menu.Item>
            <Menu.Item key="42">Слэш и фэмслеш</Menu.Item>
            <Menu.Item key="43">Эротическая фантастика</Menu.Item>
            <Menu.Item key="44">Эротический фанфик</Menu.Item>
            <Menu.Item key="45">Эротическое фэнтези</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={(
              <span>
                  <SettingOutlined/>
                  <span>Детектив</span>
                </span>
            )}
          >
            <Menu.Item key="46">Исторический детектив</Menu.Item>
            <Menu.Item key="47">Фантастический детектив</Menu.Item>
            <Menu.Item key="48">Шпионский детектив</Menu.Item>
          </SubMenu>
          <Menu.Item icon={<BookOutlined/>}>Поэзия</Menu.Item>
          <SubMenu
            key="sub7"
            title={(
              <span>
                  <SettingOutlined/>
                  <span>Разное</span>
                </span>
            )}
          >
            <Menu.Item key="49">Бизнес-литература</Menu.Item>
            <Menu.Item key="50">Детская литература</Menu.Item>
            <Menu.Item key="51">Документальная проза</Menu.Item>
            <Menu.Item key="52">Публицистика</Menu.Item>
            <Menu.Item key="53">Развитие личности</Menu.Item>
            <Menu.Item key="54">Сказка</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="55" icon={<BookOutlined/>}>
          Блоги
        </Menu.Item>
        <SubMenu
          key="sub8"
          title={(
            <span>
                <SettingOutlined/>
                <span>Мои книги</span>
              </span>
          )}
        >
          <Menu.Item key="56">Читаю</Menu.Item>
          <Menu.Item key="57">Прочитано</Menu.Item>
          <Menu.Item key="58">Хочу прочитать</Menu.Item>
          <Menu.Item key="59">Просмотренные</Menu.Item>
        </SubMenu>
        <Menu.Item key="60" icon={<BookOutlined/>}>
          Я автор
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};
