import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyle from '../styles/components/header';
import Constants from '../utils/constants';
import Apartment from '../assets/images/apartment.jpg';

const Header = () => (
  <HeaderStyle>
    <header>
      <nav className="nav__mobile">
        <div className="logo">
          <Link to={Constants.home}>Hero</Link>
        </div>
        <div className="menu">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <ul className="nav__links">
          <li>
            <Link to={Constants.home}>Home</Link>
          </li>
          <li>
            <Link to={Constants.sellHouse}>Vender</Link>
          </li>
          <li>
            <a href="/">Comprar</a>
          </li>
        </ul>
      </nav>
      <nav className="nav__desktop">
        <div className="logo">
          <Link to={Constants.home}>Hero</Link>
        </div>
        <ul className="links__desktop">
          <li>
            <Link to={Constants.home}>Home</Link>
          </li>
          <li>
            <Link to={Constants.sellHouse}>Vender</Link>
          </li>
          <li>
            <a href="/">Comprar</a>
          </li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero__image">
          <img src={Apartment} loading="eager" alt="" />
        </div>
      </div>
      <div className="signup">
        <Link to={Constants.sellHouse} className="button">
          Solicita tu oferta gratis
        </Link>
      </div>
    </header>
  </HeaderStyle>
);

export default Header;
