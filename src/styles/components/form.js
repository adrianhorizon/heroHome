import styled from 'styled-components';
import COLORS from '../colors';
import SIZE from '../variables';

const FormStyle = styled.div`
    .header__hero {
        padding: 20px 0;
        
        a {
            color: ${COLORS.greenBg};
            font-weight: 600;
        }
    }

    .column__form {
        flex: 1;  
    }  
  
    .container__form {
        max-width: 80vw;
        margin-right: auto;
        margin-left: auto;
    }
  
    .column {
        padding: 1em;
    }

    .pre-container {
        background-color: ${COLORS.greyLight};
        border-radius: 6px;
    }

    .pre-space {
        margin-bottom: 10px;
    }

    .pre-value {
        color: ${COLORS.black};
        font-weight: 600;
        margin-left: 10px;
    }

    @media only screen and (min-width: ${SIZE.tablet}) {
        .layout__form {
            display: flex;
        }
    }
`;

export default FormStyle;
