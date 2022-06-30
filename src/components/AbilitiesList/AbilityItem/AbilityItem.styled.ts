import { Box, Image, Text } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  flex-direction: row;
  width: 100%;
  margin-bottom: 4px;
  justify-content: flex-end;
  align-items: center;
`;

export const AbilityImage = styled(Image)`
  height: 18px;
`;

export const ValueWrapper = styled(Box)`
  width: 75%;
  margin-left: 5px;
`;

export const TextsWrapper = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
`;

export const ValueText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`;
