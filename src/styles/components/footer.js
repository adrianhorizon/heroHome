import styled from 'styled-components';
import COLORS from '../colors';
import SIZE from '../variables';

const FooterStyle = styled.div`
  footer {
    padding: 2rem;
    background-color: ${COLORS.purple};

    ul {
      margin-bottom: 2rem;
    }

    li a {
      display: block;
      padding-bottom: 0.5rem;
    }

    a {
      color: ${COLORS.white};
    }
  }

  .social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 3.5rem;

    img:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  footer .signup {
    padding: 0;
    margin-bottom: 3.5rem;
  }

  .created {
    text-align: center;
    font-size: 0.75rem;

    a {
      color: ${COLORS.backgroundGrey};
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    .footer__group {
      padding: 3rem 3rem 4.5rem 3rem;
      max-width: 1500px;
      margin: 0 auto;
    }

    footer {
      display: flex;
      flex-direction: column;
    }

    .footer__group {
      display: flex;
      justify-content: space-between;
    }

    .footer__group {
      width: 100%;
    }
  }
`;

export default FooterStyle;
