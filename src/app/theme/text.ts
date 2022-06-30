import { ThemeType } from 'grommet';
import { css } from 'styled-components';

const text: ThemeType['text'] = {
  extend: (props) => css`
    font-weight: 700;
    font-style: italic;
    color: #ffffff;
  `,
  xsmall: {
    size: '12px',
    height: '16px',
    maxWidth: '336px',
  },
  small: {
    size: '16px',
    height: '24px',
    maxWidth: '336px',
  },
  medium: {
    size: '18px',
    height: '24px',
    maxWidth: '432px',
  },
  large: {
    size: '20px',
    height: '24px',
    maxWidth: '528px',
  },
  xlarge: {
    size: '24px',
    maxWidth: '624px',
  },
  xxlarge: {
    size: '32px',
    maxWidth: '816px',
  },
};

export default text;
