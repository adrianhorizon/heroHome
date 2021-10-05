import styled from 'styled-components';
import COLORS from '../colors';

const ProgressStyle = styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${({ width }) => width};
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: ${COLORS.greyLight};
  }

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${COLORS.blueBlack};
  }
`;

export default ProgressStyle;
