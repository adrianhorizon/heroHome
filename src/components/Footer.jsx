import React from 'react';
import FooterStyle from '../styles/components/footer';

const Footer = () => (
  <FooterStyle>
    <footer>
      <div className="footer__group">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#service">Vender</a>
          </li>
          <li>
            <a href="#work">Comprar</a>
          </li>
        </ul>
        <div className="footer__social">
          <div className="logo logo--light">
            <a href="/">Hero</a>
          </div>
          <div className="social">
            <img src="assets/icons/instagram.svg" alt="" />
            <img src="assets/icons/linkedin.svg" alt="" />
            <img src="assets/icons/twitter.svg" alt="" />
          </div>
        </div>
        <div className="signup">
          <p className="signup__question">Contactanos!</p>
          <div className="signup__group signup--footer">
            <input type="text" name="" id="" placeholder="Email" />
            <p className="button">Join</p>
          </div>
        </div>
      </div>
      <div className="created">
        <p>
          <a href="https://github.com/adrianhorizon" rel="noreferrer" target="_blank">
            adrianhorizon |
            {' '}
          </a>
          <a href="https://www.linkedin.com/in/adrianhorizon/" rel="noreferrer" target="_blank">
            Linkedin
          </a>
        </p>
      </div>
    </footer>
  </FooterStyle>
);

export default Footer;
