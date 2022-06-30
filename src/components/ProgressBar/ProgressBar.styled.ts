import { Box } from 'grommet';
import styled from 'styled-components';
import { ProgressBarProps } from './ProgressBar';

export const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  margin-top: 2px;
`;

export const BaseLine = styled(Box)`
  width: 100%;
  height: 2px;
  transform: skewX(-20deg);
  background: #333;
  position: absolute;
  bottom: 0;
`;

export const ProgressLine = styled(Box)<ProgressBarProps>`
  width: ${({ progress }) => (progress ? `${progress}%` : '100%')};
  max-width: 85%;
  height: 5px;
  transform: skewX(-20deg);
  background: #ffffff;
  position: absolute;
  bottom: 0;
`;
