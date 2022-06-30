import { Box, Card, Text } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  padding: 48px 96px;
`;

export const Header = styled(Box)`
  flex-direction: row;
  margin-bottom: 16px;
`;

interface TitleProps {
  isTypeName?: boolean;
}
export const Title = styled(Text)<TitleProps>`
  font-size: 32px;
  color: ${({ isTypeName }) => (isTypeName ? '#ffffff' : '#999999')};
  margin-right: ${({ isTypeName }) => (isTypeName ? '12px' : '0')};
`;

export const CardsWrapper = styled(Box)`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

export const AddButtonWrapper = styled(Card)`
  height: 300px;
  width: 200px;
  margin-top: 12px;
  background: #d9e0ef;
  justify-content: center;
  align-items: center;
`;
