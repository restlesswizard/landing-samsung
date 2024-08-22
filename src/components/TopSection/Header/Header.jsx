import logo from "./img/axmobi-logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="site-header">
          <div className="site-header-navigation">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">Наши услуги</li>
                <li className="menu__item">Бренды</li>
                <li className="menu__item">Отзывы</li>
              </ul>
            </nav>
          </div>

          <div className="contacts">
            <a href="tel:83433112111" className="contacts-phone">
              +8 (343) 311-21-11
            </a>
            <button className="button call-me">Перезвонить мне</button>
          </div>
        </div>
      </div>
    </header>
  );
};
