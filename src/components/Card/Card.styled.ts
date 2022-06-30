import { Box, Button, Card, Text } from 'grommet';
import styled, { css, keyframes } from 'styled-components';

interface CardWrapperProps {
  editable: boolean;
}
export const Wrapper = styled(Box)`
  padding: 12px 12px 0 0;
  position: relative;
`;

export const CardWrapper = styled(Card)<CardWrapperProps>`
  height: ${({ editable }) => (editable ? '300px' : '200px')};
  width: ${({ editable }) => (editable ? '200px' : '133px')};
  cursor: default;
`;

export const IconButton = styled(Button)`
  position: absolute;
  top: 3px;
  right: 3px;
  padding: 5px;
  margin: 0;
  border-radius: 50%;
  background: #dddddd;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 30%);
  z-index: 10;
`;

export const Thumbnail = styled(Box)`
  width: 100%;
  position: relative;
  border: 2px solid #333444;
  border-radius: 8px;
  overflow: hidden;
`;

export const NameWrapper = styled(Box)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

interface NameProps {
  color: string;
  editable: boolean;
}
export const Name = styled(Text)<NameProps>`
  text-align: center;
  color: ${({ color }) => color || '#fcfeff'};
  font-size: ${({ editable }) => (editable ? '24px' : '20px')};
`;

export const ImageWrapper = styled(Box)`
  width: 100%;
  height: 100%;
`;

interface ImageProps {
  isCharacter: boolean;
}
export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  ${({ isCharacter }) =>
    isCharacter &&
    css`
      object-fit: contain;
      margin-top: 30px;
    `}
`;

export const slideIn = keyframes`
  from {
    transform: translateY(0%);

}
  to {
    transform: translateY(100%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: rotate(0%);
  }
`;

interface AbilitiesListWrapperProps {
  isHover: boolean;
}
export const AbilitiesListWrapper = styled(Box)<AbilitiesListWrapperProps>`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  animation: ${({ isHover }) => isHover && slideOut} 620ms forwards;
  width: 100%;
  height: 100%;
  padding: 30px 12px 0;
  align-items: center;
`;
