import { Box, Text } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  justify-content: center;
  align-items: center;
`;

interface ContentCardProps {
  size: 'small' | 'medium';
}
export const ContentCard = styled(Box)<ContentCardProps>`
  width: ${({ size }) => (size === 'medium' ? '768px' : '500px')};
  justify-content: center;
  align-items: center;
  overflow: auto;
  border-radius: 10px;
  background: #359af4;
`;

export const Header = styled(Box)`
  width: 100%;
  background: #359af4;
  position: relative;
  height: 64px;
`;

export const CloseButtonWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  background: #ffffff;
  border-radius: 0px 0px 0px 20px;
`;

export const Title = styled(Text)`
  color: #ffffff;
  font-size: 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ChildrenWrapper = styled(Box)`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 24px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(30, 56, 156, 1) 0%,
    rgba(29, 131, 221, 1) 100%
  );
`;
