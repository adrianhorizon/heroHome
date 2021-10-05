import styled from 'styled-components';

const HomeStyle = styled.div`
    .card {
        border-radius: 20px;
        background-color: #ffffff;
        padding: 1rem 2rem;
        margin-bottom: 3.5rem;
    }

    .card h1 {
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    .card__image {
        width: 50px;
        height: 50px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__image img {
        width: 100%;
    }

    .card__image,
    .card__title,
    .card__description {
        margin-bottom: 1.5rem;
    }

    .service__title {
        margin-bottom: 2rem;
    }

    .service__title {
        width: 15rem;
    }

    .work h1 {
        margin-bottom: 3.5rem;
        width: 90%;
    }

    .work__card {
        margin-bottom: 2.5rem;
    }

    .work__card p {
        font-size: 0.75rem;
        color: #828282;
    }

    .work__image {
        width: 100%;
        height: 20rem;
        overflow: hidden;
        border-radius: 20px;
        object-fit: cover;
        margin-bottom: 0.5rem;
    }

    .work__image img {
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        .card__wrapper {
            display: flex;
        }

        .card {
            padding: 2rem;
            margin: 0 auto;
            width: 20rem;
            border: 1px solid transparent;
            cursor: pointer;
            transition: 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946) all;
        }

        .card:not(:last-child) {
            margin-right: 1rem;
        }

        .work h1 {
            width: 17rem;
        }

        .work__wrapper {
            display: flex;
            flex-wrap: wrap;
        }

        .work__card {
            cursor: pointer;
            width: 49%;
            margin-bottom: 5rem;
        }

        .work__image {
            height: 30rem;
            border-radius: 20px;
            transition: 0.5s cubic-bezier(0.465, 0.183, 0.153, 0.946) all;
        }

        .work__card:nth-child(1),
        .work__card:nth-child(3) {
            transform: translateY(7rem);
            margin-right: 1rem;
        }
    }
`;

export default HomeStyle;
