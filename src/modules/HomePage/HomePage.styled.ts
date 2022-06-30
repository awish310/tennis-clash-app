import { Box, Button } from 'grommet';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Box)`
  height: 100vh;
  width: 100%;
  padding: 48px;
`;

export const Header = styled(Box)`
  flex-direction: row;
  width: 80%;
  align-items: flex-end;
  margin-bottom: 20px;
`;
export const Main = styled(Box)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const SubmitButton = styled(Button)`
  min-height: 60px;
  height: fit-content;
  transform: skewX(-7deg);
  border-radius: 8px;
`;

export const ResultsWrapper = styled(Box)`
  width: 48%;
  max-height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  border-right: 1px black solid;
`;

interface ResultWrapperProps {
  selected: boolean;
}

export const ResultWrapper = styled(Box)<ResultWrapperProps>`
  background: #7e5288;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  width: 200px;
  height: 250px;

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: 0px 0px 6px 5px #fff9d9;
    `}
`;

export const ResultHeader = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 10px 42px;
  background: linear-gradient(
    180deg,
    rgba(197, 123, 204, 1) 0%,
    rgba(74, 52, 86, 1) 76%,
    rgba(42, 50, 57, 1) 100%
  );
`;

export const AbilitiesListWrapper = styled(Box)`
  width: 100%;
  padding: 12px 12px 0 0;
  align-items: center;
`;

export const SelectedResultCardsWrapper = styled(Box)`
  width: 50%;
  flex-direction: row;
  flex-wrap: wrap;
`;
