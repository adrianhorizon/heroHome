import {
  createGlobalStyle,
} from 'styled-components';
import COLORS from './colors';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        width: 100%;
        margin: 0;
        padding: 0;
        color: ${COLORS.black};
        background-color: ${COLORS.white};
    }

    form {
        max-width: 500px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        transition: 0.2s cubic-bezier(0.465, 0.183, 0.153, 0.946) color;
    }

    img {
        display: block;
    }

    ul li {
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: 500;
        color: ${COLORS.greyBlack};
    }

    p {
        font-weight: 400;
        color: ${COLORS.blueBlack};
    }

    header,
    .service,
    .work,
    .team {
        padding: 1rem 1rem 0 1rem;
    }

    header,
    .service,
    .work,
    .footer__group {
        padding: 3rem 3rem 4.5rem 3rem;
        max-width: 1500px;
        margin: 0 auto;
    }

    header,
    section {
        margin-bottom: 3.5rem;
    }

    input {
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid ${COLORS.blueBlack};
        color: ${COLORS.black};
        font-weight: 600;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;

        &:disabled {
            opacity: 0.4;
        }

        &::placeholder {
            font-weight: 400;
            color: ${COLORS.blueBlack};
        }
    }

    label {
        line-height: 2;
        display: block;
        margin-bottom: 13px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 200;
    }

    button[type="submit"],
    input[type="submit"] {
        background: ${COLORS.greenBg};
        text-transform: uppercase;
        border: none;
        margin-top: 40px;
        padding: 20px;
        font-size: 16px;
        font-weight: 100;

        &:hover {
            background: ${COLORS.greenBg};
        }
    }

    button[type="submit"]:active,
    input[type="button"]:active,
    input[type="submit"]:active {
        transition: 0.3s all;
        transform: translateY(3px);
        border: 1px solid transparent;
        opacity: 0.8;
        -webkit-appearance: none;
    }

    input[type="button"]:hover {
        transition: 0.3s all;
    }

    button[type="button"] {
        display: block;
        appearance: none;
        background: #333;
        border: none;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 4px;
    }

    h2 {
        font-weight: 200;
    }

    button {
        display: block;
        appearance: none;
        margin-top: 40px;
        border: 1px solid ${COLORS.greenBg};
        margin-bottom: 20px;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 4px;
    }

    .steps {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .steps a {
        text-decoration: none;
        font-size: 14px;
        line-height: 2;
    }

    .steps li {
        background: black;
        padding: 3px 15px;
        border-right: 1px solid #333;
    }

    .steps li:last-child {
        border: none;
    }

    .button {
        max-width: 225px;
        background-color: ${COLORS.greenBg};
        border-radius: 10px;
        padding: 0.5rem 1.25rem;
        color: ${COLORS.white};
    }

    @media (hover: hover) {
        nav a:hover {
            color: ${COLORS.blue};
        }

        footer a:hover {
          color: ${COLORS.blue};
        }

        .work__image:hover {
            transform: scale(1.02);
        }

        .card:hover {
            box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1), 0px 12px 32px rgba(51, 51, 51, 0.1);
        }
    }
`;

export default GlobalStyle;
