import styled from 'styled-components';
import COLORS from '../colors';
import SIZE from '../variables';

const HeaderStyle = styled.div`
    header,
    section {
        margin-bottom: 3.5rem;
    }

    .nav__mobile {
        margin-bottom: 3.5rem;
    }

    .nav__mobile {
        display: flex;
        align-items: center;
    }

    .nav__desktop {
        display: none;
    }

    .logo a {
        font-weight: 800;
        color: ${COLORS.greyBlack};
        font-size: 1.5rem;
    }

    .menu {
        margin-left: auto;
        z-index: 11;
    }

    .line {
        width: 1.75rem;
        height: 3px;
        background-color: ${COLORS.greyBlack};
        position: relative;
    }

    .line:not(:last-child) {
        margin-bottom: 5px;
    }

    .nav__links {
        z-index: 10;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        pointer-events: none;
        background: ${COLORS.blueBlack};
        clip-path: circle(50px at 105% 10%);
        -webkit-clip-path: circle(50px at 105% -10%);
        transition: all 1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
    }

    .nav__links.open {
        clip-path: circle(1000px at 105% -10%);
        -webkit-clip-path: circle(1000px at 105% -10%);
        pointer-events: all;
    }

    .nav__links li {
        margin-bottom: 1rem;
    }

    .nav__links a {
        color: ${COLORS.greyBlack};
        font-weight: 600;
    }

    .hero h1 {
        font-size: 1.5rem;
    }

    .hero p {
        font-size: 0.75rem;
    }

    .hero__image {
        width: 100%;
        height: 10rem;
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }

    .hero__image img {
        height: 30vh;
        width: 100%;
    }

    @media screen and (min-width: ${SIZE.tablet}) {
        .nav__mobile {
            display: none;
        }

        .nav__desktop {
            display: flex;
            align-items: center;
            padding: 1.5rem;
            margin-bottom: 3.5rem;
        }

        .links__desktop {
            margin-left: auto;
            display: flex;
        }

        .links__desktop a {
            color: ${COLORS.greyBlack};
            font-weight: 500;
        }

        .links__desktop li:not(:last-child) {
            margin-right: 2rem;
        }

        .hero__image {
            height: 20rem;
        }

        .hero__image img {
            width: 100%;
            object-fit: cover;
        }

        header {
            padding: 3rem 3rem 4.5rem 3rem;
            max-width: 1500px;
            margin: 0 auto;
        }
    }
`;

export default HeaderStyle;
