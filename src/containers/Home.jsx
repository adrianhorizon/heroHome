import React from 'react';
import HomeStyle from '../styles/components/home';
import SmartHome from '../assets/images/smarthome.jpg';
import Onboard from '../assets/images/trash.jpg';
import Booking from '../assets/images/onboard.jpg';
import JuiceProduct from '../assets/images/step.jpg';
import Reloj from '../assets/images/reloj.jpeg';

const Home = () => (
  <HomeStyle>
    <section className="service">
      <h1 className="service__title">¿Cómo lo hacemos posible?</h1>
      <div className="card__wrapper">
        <div className="card">
          <div className="card__image">
            <img src={Reloj} alt="" />
          </div>
          <div className="card__title">
            <h1>Facilidad</h1>
          </div>
          <div className="card__description">
            <p>Pensar en tu casa no debería preocuparte, nos encargamos de los trámites y de las reparaciones.</p>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={Reloj} alt="" />
          </div>
          <div className="card__title">
            <h1>Precio justo</h1>
          </div>
          <div className="card__description">
            <p>Deja de preguntarte ¿Cuánto vale mi propiedad? Te ofrecemos un precio de compra basado en la oferta del mercado.</p>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={Reloj} alt="" />
          </div>
          <div className="card__title">
            <h1>Rápido y en línea</h1>
          </div>
          <div className="card__description">
            <p>Reducimos los tiempos de venta hasta 30 veces ¡Vende tu propiedad con un clic!</p>
          </div>
        </div>
      </div>
    </section>

    <section className="work">
      <h1>¿Quieres vender tu casa o apartamento?</h1>
      <div className="work__wrapper">
        <div className="work__card">
          <div className="work__image">
            <img src={JuiceProduct} loading="lazy" alt="" />
          </div>
          <p>Nos cuentas las características de tu inmueble a través de un formulario.</p>
          <h3>Solicito una oferta en línea</h3>
        </div>
        <div className="work__card">
          <div className="work__image">
            <img src={Onboard} loading="lazy" alt="" />
          </div>
          <p>Si tu inmueble cumple con todo lo que buscamos vamos a conocerlo</p>
          <h3>Agendo una visita</h3>
        </div>
        <div className="work__card">
          <div className="work__image">
            <img src={SmartHome} loading="lazy" alt="" />
          </div>
          <p>Mi inmueble es comparado con toda la oferta del mercado para determinar un precio comercial.</p>
          <h3>Recibo una oferta</h3>
        </div>
        <div className="work__card">
          <div className="work__image">
            <img src={Booking} loading="lazy" alt="" />
          </div>
          <p>Si estás de acuerdo con la oferta, compramos tu inmueble y te ayudamos con los trámites</p>
          <h3>Acepto y recibo mi dinero</h3>
        </div>
      </div>
    </section>
  </HomeStyle>
);

export default Home;
