import './Hero.css';
import { Button } from '../../Button/Button';

export const Hero = () => {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-content__col">
            <h1>
              Ремонт&nbsp;
              <span className="brandname">SAMSUNG</span>&nbsp;в Екатеринбурге любой
              сложности
            </h1>

            <p className="hero-content__info">
              Ремонтируем устройства любой сложности в кратчайшие сроки и с
              гарантией до 3 месяцев
            </p>

            <Button 
              btnClassName="order-repair"
              buttonText="Заказать ремонт"
              btnTextClassName="text"
            />
          </div>
          <div className="hero-content__col">
            <div className="hero-content__image">
              {/* <img src={phone} alt="Смартфон Samsung" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
