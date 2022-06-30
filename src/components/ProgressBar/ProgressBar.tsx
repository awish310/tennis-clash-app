import React from 'react';
import { BaseLine, ProgressLine, Wrapper } from './ProgressBar.styled';

export interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Wrapper>
      <BaseLine />
      <ProgressLine progress={progress} />
    </Wrapper>
  );
};

export default ProgressBar;
