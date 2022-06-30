import { Box, Image } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  flex-direction: row;
  min-height: 100%;
  min-width: 200px;
  border-right: 1px black solid;
`;

export const Logo = styled(Image)`
  width: 100px;
  margin: 20px auto;
`;
