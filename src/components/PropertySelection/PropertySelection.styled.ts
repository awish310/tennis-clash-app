import { Box, Text as GrommetText } from 'grommet';
import styled from 'styled-components';
import { PropertyType } from './PropertySelection';

interface WrapperProps {
  type: PropertyType;
}
export const Wrapper = styled(Box)<WrapperProps>`
  width: ${({ type }) => (type === PropertyType.COUNT ? '150px' : '300px')};
  align-items: center;
  margin-right: 24px;
`;

interface InputWrapperProps {
  disabled: boolean;
}

export const InputWrapper = styled(Box)<InputWrapperProps>`
  position: relative;
  width: 100%;
  min-height: 60px;
  height: fit-content;
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const ValueWrapper = styled(Box)<WrapperProps>`
  position: absolute;
  right: 0;
  width: ${({ type }) => (type === PropertyType.COUNT ? '110px' : '260px')};
  min-height: 100%;
  transform: skewX(-7deg);
  background: #16224f;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  flex-wrap: wrap;
  color: #fff;
`;

export const AddButton = styled(Box)`
  width: 50px;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  transform: skewX(-7deg);
  background: #222;
  border-radius: 8px;
  padding: 0 9px 0 0;
`;

export const Title = styled(GrommetText)`
  margin-bottom: 12px;
`;

interface TextProps {
  multi?: boolean;
}
export const Text = styled(GrommetText)<TextProps>`
  font-size: ${({ multi }) => (multi ? '14px' : '24px')};
`;
