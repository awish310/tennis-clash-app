import { Box, CardFooter, Text, TextInput } from 'grommet';
import styled from 'styled-components';

interface WrapperProps {
  editable: boolean;
}

export const Wrapper = styled(CardFooter)<WrapperProps>`
  flex-direction: row;
  justify-content: center;
  padding: 12px 10px;
  height: ${({ editable }) => (editable ? '66px' : '48px')};
`;

interface LevelProps {
  editable: boolean;
  isCharacter: boolean;
}
export const Level = styled(Text)<LevelProps>`
  font-size: ${({ editable }) => (editable ? '32px' : '26px')};
  margin: auto;
  color: ${({ isCharacter }) => (isCharacter ? '#414652' : '#fcfeff')};
`;

export const InputWrapper = styled(Box)`
  width: 40%;
  margin-left: 45px;
`;

export const Input = styled(TextInput)<Partial<LevelProps>>`
  overflow: hidden;
  align-items: center;
  font-style: italic;
  color: ${({ isCharacter }) => (isCharacter ? '#414652' : '#fcfeff')};
  border: none;
  font-size: 32px;
  caret-color: transparent;
`;
