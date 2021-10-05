import React from 'react';
import ProgressStyle from '../styles/components/progress';

const ProgressBar = ({
  value, max, width,
}) => (
  <ProgressStyle width={width}>
    <progress value={value} max={max} />
  </ProgressStyle>
);

export default ProgressBar;
